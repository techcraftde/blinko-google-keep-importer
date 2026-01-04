export interface GoogleKeepNote {
  id?: string;
  title?: string;
  textContent?: string; // HTML-formatted content from Keep
  labels?: string[]; // tags
  createdTime?: string;
  updatedTime?: string;
}

export interface BlinkNote {
  title: string;
  body: string; // HTML-formatted content
  tags: string[];
}

// Simple passthrough converter: keep HTML as-is to preserve formatting
export function convertKeepNoteToBlink(keepNote: GoogleKeepNote): BlinkNote {
  const title = (keepNote.title ?? '').toString();
  const body = keepNote.textContent ?? '';
  const tags = Array.isArray(keepNote.labels) ? keepNote.labels.map(s => s?.trim()).filter(Boolean) : [];
  return {
    title,
    body,
    tags,
  };
}

export function importFromKeepExport(exportJson: any): BlinkNote[] {
  const notes: BlinkNote[] = [];
  const items = Array.isArray(exportJson?.notes) ? exportJson.notes : (exportJson?.keepNotes ?? []);
  for (const item of items) {
    // Normalize into GoogleKeepNote shape
    const gk: GoogleKeepNote = {
      id: item?.id ?? undefined,
      title: item?.title ?? item?.name ?? '',
      textContent: item?.textContent ?? item?.content ?? '',
      labels: Array.isArray(item?.labels) ? item.labels : item?.tags ?? [],
      createdTime: item?.createdTime,
      updatedTime: item?.updatedTime,
    };
    notes.push(convertKeepNoteToBlink(gk));
  }
  return notes;
}
