import JSZip from 'jszip';
import TurndownService from 'turndown';

export type ProgressCallback = (current: number, total: number) => void;

export interface ImportableBlinkoNote {
  title: string;
  content: string;
  tags: string[];
  keepLabels: string[];
  sourceFile: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface SkippedNote {
  file: string;
  type: 'trashed' | 'empty' | 'error';
  detail?: string;
}

export interface ParseResult {
  notes: ImportableBlinkoNote[];
  skipped: SkippedNote[];
}

interface KeepNote {
  title?: string;
  textContent?: string;
  listContent?: Array<{ text?: string; checked?: boolean; isChecked?: boolean }>;
  labels?: Array<string | { name?: string }>;
  attachments?: KeepAttachmentEntry[];
  annotations?: Array<{ description?: string }>;
  createdTimestampUsec?: string;
  updatedTimestampUsec?: string;
  userEditedTimestampUsec?: string;
  createdTime?: string;
  updatedTime?: string;
  created?: string;
  updated?: string;
  isTrashed?: boolean;
}

type KeepAttachmentEntry = string | KeepAttachmentMeta;

interface KeepAttachmentMeta {
  filePath?: string;
  originalFilePath?: string;
  originalFileName?: string;
  fileName?: string;
  mimetype?: string;
  mimeType?: string;
  type?: string;
}

const turndown = new TurndownService({
  headingStyle: 'atx',
  bulletListMarker: '-',
  codeBlockStyle: 'fenced',
  emDelimiter: '*'
});

turndown.keep(['span', 'div']);

turndown.addRule('strikethrough', {
  filter: ['s', 'del'],
  replacement(content: string) {
    return `~~${content}~~`;
  }
});

export async function parseGoogleKeepZip(file: File, onProgress?: ProgressCallback): Promise<ParseResult> {
  if (!file) {
    throw new Error('Keine Datei ausgewählt.');
  }

  if (!file.name.toLowerCase().endsWith('.zip')) {
    throw new Error('Bitte eine Google Keep ZIP-Datei wählen.');
  }

  const buffer = await file.arrayBuffer();
  const zip = await JSZip.loadAsync(buffer);
  const entries = Object.values(zip.files).filter((entry) => {
    if (entry.dir) return false;
    const name = entry.name.toLowerCase();
    if (!name.endsWith('.json')) return false;
    if (name.endsWith('labels.json')) return false;
    if (name.includes('metadata')) return false;
    return true;
  });

  if (!entries.length) {
    throw new Error('Es wurden keine Google Keep JSON-Dateien gefunden.');
  }

  const drafts: Array<ImportableBlinkoNote & { sortKey: number }> = [];
  const skipped: SkippedNote[] = [];
  const total = entries.length;

  for (let index = 0; index < entries.length; index++) {
    const entry = entries[index];
    try {
      const raw = await entry.async('string');
      const keepNote: KeepNote = JSON.parse(raw);

      if (keepNote.isTrashed) {
        skipped.push({ file: entry.name, type: 'trashed' });
        continue;
      }

      const converted = await convertKeepNote(keepNote, entry.name, zip);
      if (!converted) {
        skipped.push({ file: entry.name, type: 'empty' });
        continue;
      }

      drafts.push({
        ...converted,
        sortKey: converted.createdAt ? Date.parse(converted.createdAt) : Number.MAX_SAFE_INTEGER
      });
    } catch (error) {
      skipped.push({
        file: entry.name,
        type: 'error',
        detail: error instanceof Error ? error.message : 'Unknown parsing error'
      });
    } finally {
      onProgress?.(index + 1, total);
    }
  }

  const notes = drafts
    .sort((a, b) => a.sortKey - b.sortKey)
    .map(({ sortKey, ...note }) => note);

  return { notes, skipped };
}

export async function convertKeepJsonNote(
  note: unknown,
  filePath = 'keep-note.json'
): Promise<ImportableBlinkoNote | null> {
  return convertKeepNote(note as KeepNote, filePath);
}

async function convertKeepNote(note: KeepNote, filePath: string, zip?: JSZip): Promise<ImportableBlinkoNote | null> {
  const sections: string[] = [];

  const primaryText = buildPrimaryText(note.textContent);
  if (primaryText) sections.push(primaryText);

  const checklist = buildChecklist(note.listContent);
  if (checklist) sections.push(checklist);

  const annotations = buildAnnotations(note.annotations);
  if (annotations) sections.push(annotations);

  const attachments = await buildAttachments(note.attachments, zip);
  if (attachments) sections.push(attachments);

  if (!sections.length) {
    return null;
  }

  const metadata = buildMetadata(note, filePath);
  if (metadata.block) {
    sections.push(metadata.block);
  }

  const keepLabels = normalizeLabels(note.labels);

  return {
    title: buildTitle(note, filePath),
    content: sections.join('\n\n').trim(),
    tags: keepLabels,
    keepLabels,
    sourceFile: filePath,
    createdAt: metadata.createdAt,
    updatedAt: metadata.updatedAt
  };
}

function buildPrimaryText(text?: string) {
  if (!text) return '';
  const normalized = text.replace(/\u003c/g, '<').trim();
  if (!normalized) return '';
  const looksHtml = /<[^>]+>/.test(normalized);
  return looksHtml ? turndown.turndown(normalized) : normalized;
}

function buildChecklist(items?: Array<{ text?: string; checked?: boolean; isChecked?: boolean }>) {
  if (!items?.length) return '';
  const rows = items
    .map((item) => {
      const entryText = item.text?.trim();
      if (!entryText) return null;
      const checked = item.checked ?? item.isChecked ?? false;
      return `- [${checked ? 'x' : ' '}] ${entryText}`;
    })
    .filter(Boolean);

  if (!rows.length) return '';
  return `## Checkliste\n${rows.join('\n')}`;
}

function buildAnnotations(annotations?: Array<{ description?: string }>) {
  if (!annotations?.length) return '';
  const rows = annotations
    .map((annotation) => annotation.description?.trim())
    .filter(Boolean);

  if (!rows.length) return '';
  return `## Annotationen\n${rows.map((entry) => `- ${entry}`).join('\n')}`;
}

async function buildAttachments(attachments: KeepAttachmentEntry[] | undefined, zip?: JSZip) {
  if (!attachments?.length) return '';
  if (!zip) return '';

  const rows: string[] = [];

  for (const attachment of attachments) {
    const entry = findAttachmentEntry(zip, attachment);
    if (!entry) continue;

    const meta = typeof attachment === 'string' ? undefined : attachment;
    const fileName = getAttachmentName(attachment, entry.name);
    const mimeType = meta?.mimeType || meta?.mimetype || guessMimeType(fileName);
    const data = await entry.async('base64');
    const dataUrl = `data:${mimeType};base64,${data}`;
    const isImage = mimeType.startsWith('image/');
    rows.push(isImage ? `![${fileName}](${dataUrl})` : `[${fileName}](${dataUrl})`);
  }

  if (!rows.length) return '';
  return `## Anhänge\n${rows.join('\n')}`;
}

function buildMetadata(note: KeepNote, filePath: string) {
  const createdAt = toIsoTimestamp(
    note.createdTimestampUsec || note.createdTime || note.created
  );
  const updatedAt = toIsoTimestamp(
    note.userEditedTimestampUsec || note.updatedTimestampUsec || note.updatedTime || note.updated
  );

  const lines: string[] = [];
  lines.push('---');
  lines.push(`> Imported from Google Keep (${extractFileName(filePath)})`);
  if (createdAt) {
    lines.push(`> Created: ${formatHumanDate(createdAt)}`);
  }
  if (updatedAt) {
    lines.push(`> Updated: ${formatHumanDate(updatedAt)}`);
  }

  return {
    block: lines.join('\n'),
    createdAt,
    updatedAt
  };
}

function normalizeLabels(labels?: Array<string | { name?: string }>) {
  if (!labels?.length) return [];
  return labels
    .map((label) => (typeof label === 'string' ? label : label?.name ?? ''))
    .map((label) => label.trim())
    .filter(Boolean);
}

function buildTitle(note: KeepNote, filePath: string) {
  if (note.title?.trim()) {
    return note.title.trim();
  }

  const fallback = buildPrimaryText(note.textContent) || '';
  if (fallback) {
    const trimmed = stripFormatting(fallback);
    if (trimmed) {
      return trimmed.length > 60 ? `${trimmed.slice(0, 57)}…` : trimmed;
    }
  }

  return `Google Keep Notiz (${extractFileName(filePath)})`;
}

function stripFormatting(value: string) {
  return value
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#*_`>-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractFileName(filePath: string) {
  const fileName = filePath.split('/').pop() ?? filePath;
  return fileName.replace(/\.json$/i, '') || fileName;
}

function toIsoTimestamp(rawValue?: string) {
  if (!rawValue) return undefined;
  if (/^\d+$/.test(rawValue)) {
    const numeric = Number(rawValue);
    if (!Number.isFinite(numeric)) return undefined;
    const milliseconds = rawValue.length > 13 ? Math.floor(numeric / 1000) : numeric;
    return new Date(milliseconds).toISOString();
  }

  const parsed = new Date(rawValue);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString();
}

function formatHumanDate(isoString: string) {
  try {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat(undefined, {
      dateStyle: 'medium',
      timeStyle: 'short'
    }).format(date);
  } catch {
    return isoString;
  }
}

function findAttachmentEntry(zip: JSZip, attachment: KeepAttachmentEntry) {
  const candidatePath = normalizeAttachmentPath(
    typeof attachment === 'string'
      ? attachment
      : attachment.filePath || attachment.originalFilePath || attachment.originalFileName || attachment.fileName
  );
  const searches = new Set<string>();

  if (candidatePath) {
    searches.add(candidatePath);
    searches.add(`Takeout/${candidatePath}`);
    searches.add(`Takeout/Keep/${candidatePath}`);
    searches.add(`Keep/${candidatePath}`);
  }

  const fileName = candidatePath?.split('/').pop();
  if (fileName) {
    searches.add(fileName);
    searches.add(`Takeout/Keep/${fileName}`);
    searches.add(`Keep/${fileName}`);
  }

  for (const search of searches) {
    const entry = zip.file(search);
    if (entry) return entry;
  }

  if (fileName) {
    const fallback = Object.values(zip.files).find((entry) => entry.name.endsWith(`/${fileName}`));
    if (fallback) return fallback;
  }

  return null;
}

function normalizeAttachmentPath(path?: string | null) {
  if (!path) return undefined;
  return path.replace(/^\.\//, '').replace(/\\/g, '/');
}

function getAttachmentName(attachment: KeepAttachmentEntry, fallbackPath: string) {
  if (typeof attachment === 'string') {
    return attachment.split('/').pop() || attachment;
  }

  return (
    attachment.fileName ||
    attachment.originalFileName ||
    attachment.filePath?.split('/').pop() ||
    fallbackPath.split('/').pop() ||
    'attachment'
  );
}

function guessMimeType(fileName: string) {
  const extension = fileName.split('.').pop()?.toLowerCase();
  switch (extension) {
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'png':
      return 'image/png';
    case 'gif':
      return 'image/gif';
    case 'webp':
      return 'image/webp';
    case 'svg':
      return 'image/svg+xml';
    case 'm4a':
      return 'audio/mp4';
    case 'wav':
      return 'audio/wav';
    case 'mp3':
      return 'audio/mpeg';
    case 'pdf':
      return 'application/pdf';
    default:
      return 'application/octet-stream';
  }
}
