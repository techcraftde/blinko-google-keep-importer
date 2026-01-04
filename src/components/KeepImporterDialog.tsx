/** @jsxImportSource preact */
import type { JSX } from 'preact';
import { useMemo, useRef, useState } from 'preact/hooks';
import {
  parseGoogleKeepZip,
  type ImportableBlinkoNote,
  type ParseResult,
  type SkippedNote
} from '../lib/googleKeepParser';

interface KeepImporterDialogProps {
  onClose: () => void;
}

type Phase = 'idle' | 'parsing' | 'ready' | 'importing' | 'completed' | 'error';

interface ImportLogEntry {
  title: string;
  status: 'success' | 'error';
  message?: string;
}

export function KeepImporterDialog({ onClose }: KeepImporterDialogProps): JSX.Element {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [phase, setPhase] = useState<Phase>('idle');
  const [progress, setProgress] = useState(0);
  const [parseResult, setParseResult] = useState<ParseResult | null>(null);
  const [importLogs, setImportLogs] = useState<ImportLogEntry[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [analysisTimestamp, setAnalysisTimestamp] = useState<Date | null>(null);
  const [currentNoteTitle, setCurrentNoteTitle] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const t = useBlinkoTranslation();

  const stats = useMemo(() => {
    const total = parseResult?.notes.length ?? 0;
    const skipped = parseResult?.skipped.length ?? 0;
    const labels = new Set(parseResult?.notes.flatMap((note) => note.tags) ?? []);
    return { total, skipped, labels: labels.size };
  }, [parseResult]);

  const statusLabel = useMemo(() => {
    switch (phase) {
      case 'parsing':
        return t('dialog.status.parsing', 'Analysiere ZIP-Datei …');
      case 'ready':
        return t('dialog.status.ready', 'Bereit für den Import');
      case 'importing':
        return t('dialog.status.importing', 'Importiere Notizen …');
      case 'completed':
        return t('dialog.status.completed', 'Import abgeschlossen');
      case 'error':
        return t('dialog.status.error', 'Fehler beim Import');
      default:
        return t('dialog.status.idle', 'Wähle eine ZIP-Datei aus');
    }
  }, [phase, t]);

  const instructions = useMemo(
    () => [
      t('dialog.instructions.export', 'Öffne takeout.google.com und wähle "Google Keep" aus.'),
      t('dialog.instructions.zip', 'Wähle beim Export "JSON" + "Medien" und exportiere als ZIP-Datei.'),
      t('dialog.instructions.import', 'Ziehe die ZIP-Datei hierher oder wähle sie über den Button aus, um sie zu importieren.')
    ],
    [t]
  );

  const canImport = Boolean(parseResult?.notes.length) && !['parsing', 'importing'].includes(phase);

  const resetState = () => {
    setPhase('idle');
    setSelectedFile(null);
    setParseResult(null);
    setProgress(0);
    setImportLogs([]);
    setErrorMessage(null);
    setAnalysisTimestamp(null);
    setCurrentNoteTitle('');
  };

  const handleFileSelection = async (file: File) => {
    if (!file.name.toLowerCase().endsWith('.zip')) {
      setErrorMessage(t('dialog.errors.invalidFile', 'Bitte eine ZIP-Datei auswählen.'));
      setPhase('error');
      return;
    }

    setSelectedFile(file);
    setPhase('parsing');
    setProgress(4);
    setErrorMessage(null);
    setImportLogs([]);

    try {
      const result = await parseGoogleKeepZip(file, (current, total) => {
        const portion = total ? current / total : 0;
        setProgress(Math.min(60, Math.max(10, Math.round(portion * 60))));
      });
      setParseResult(result);
      setAnalysisTimestamp(new Date());

      if (!result.notes.length) {
        setPhase('error');
        setErrorMessage(t('dialog.errors.noNotes', 'Keine importierbaren Notizen gefunden.'));
        return;
      }

      setPhase('ready');
      setProgress(70);
    } catch (error) {
      setPhase('error');
      setErrorMessage(error instanceof Error ? error.message : t('dialog.errors.generic', 'Analyse fehlgeschlagen.'));
    }
  };

  const handleInputChange = async (event: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    const file = event.currentTarget.files?.[0];
    if (file) {
      await handleFileSelection(file);
      event.currentTarget.value = '';
    }
  };

  const handleDrop = async (event: DragEvent) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer?.files?.[0];
    if (file) {
      await handleFileSelection(file);
    }
  };

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: DragEvent) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const startImport = async () => {
    if (!parseResult?.notes.length) return;
    setPhase('importing');
    setProgress(70);
    setErrorMessage(null);
    setImportLogs([]);

    let successCount = 0;
    let failureCount = 0;
    const logs: ImportLogEntry[] = [];

    for (let index = 0; index < parseResult.notes.length; index++) {
      const note = parseResult.notes[index];
      setCurrentNoteTitle(note.title);
      try {
        await createNoteInBlinko(note);
        successCount += 1;
        logs.push({ title: note.title, status: 'success' });
      } catch (error) {
        failureCount += 1;
        const reason = error instanceof Error ? error.message : t('dialog.errors.generic', 'Unbekannter Fehler.');
        logs.push({ title: note.title, status: 'error', message: reason });
        setErrorMessage(reason);
      } finally {
        const portion = (index + 1) / parseResult.notes.length;
        setProgress(70 + Math.round(portion * 30));
        setImportLogs([...logs]);
      }
    }

    setCurrentNoteTitle('');
    setPhase('completed');

    if (failureCount) {
      window.Blinko?.toast?.error?.(
        t('dialog.toast.importPartial', 'Import abgeschlossen, einige Notizen konnten nicht übernommen werden.')
      );
    } else {
      window.Blinko?.toast?.success?.(t('dialog.toast.importSuccess', 'Alle Notizen wurden erfolgreich importiert.'));
    }
  };

  const skippedEntries = parseResult?.skipped ?? [];

  return (
    <div class="max-w-3xl w-full text-sm text-slate-800">
      <div class="space-y-6">
        <header class="space-y-1">
          <p class="text-base text-slate-600">{t('dialog.subtitle', 'Importiere deine Google Keep Notizen in wenigen Minuten in Blinko.')}</p>
        </header>

        <section
          class={`rounded-xl border-2 border-dashed p-6 transition-colors ${
            isDragging ? 'border-blue-500 bg-blue-50' : 'border-slate-200 bg-white'
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => fileInputRef.current?.click()}
        >
          <p class="text-lg font-semibold mb-2">{t('dialog.dropzone.title', 'Google Takeout ZIP auswählen')}</p>
          <p class="text-slate-600 mb-4">{t('dialog.dropzone.instructions', 'Ziehe deine exportierte Datei hierher oder klicke, um sie auszuwählen.')}</p>
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-full border border-blue-500 px-4 py-2 text-blue-600 hover:bg-blue-50"
          >
            {t('dialog.dropzone.cta', 'Datei auswählen')}
          </button>
          <p class="mt-3 text-xs text-slate-500">{t('dialog.dropzone.hint', 'Unterstützt werden unveränderte ZIP-Exporte aus Google Takeout → Keep.')}</p>
          <input
            type="file"
            accept=".zip"
            ref={fileInputRef}
            onChange={handleInputChange}
            class="hidden"
          />
        </section>

        {selectedFile && (
          <section class="rounded-xl border border-slate-200 bg-white p-5">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p class="text-xs uppercase tracking-wide text-slate-500">{t('dialog.summary.file', 'Ausgewählte Datei')}</p>
                <p class="font-medium text-slate-900">{selectedFile.name}</p>
                <p class="text-xs text-slate-500">
                  {formatBytes(selectedFile.size)} · {t('dialog.summary.lastModified', 'Geändert')}: {formatDateTime(new Date(selectedFile.lastModified))}
                </p>
              </div>
              <button
                type="button"
                class="text-xs text-blue-600 hover:underline"
                onClick={resetState}
              >
                {t('dialog.buttons.reset', 'Andere Datei wählen')}
              </button>
            </div>
          </section>
        )}

        <section class="grid gap-4 rounded-xl border border-slate-200 bg-white p-5 md:grid-cols-2">
          <div>
            <p class="text-xs uppercase tracking-wide text-slate-500">{t('dialog.summary.title', 'Analyse')}</p>
            <p class="text-2xl font-semibold text-slate-900">{stats.total || '—'}</p>
            <p class="text-xs text-slate-500">{t('dialog.summary.notes', 'importierbare Notizen')}</p>
          </div>
          <div>
            <p class="text-xs uppercase tracking-wide text-slate-500">{t('dialog.summary.labels', 'Labels')}</p>
            <p class="text-2xl font-semibold text-slate-900">{stats.labels || '—'}</p>
            <p class="text-xs text-slate-500">{t('dialog.summary.skipped', 'Übersprungen')} · {stats.skipped}</p>
          </div>
          <div class="md:col-span-2 mt-4">
            <div class="mb-2 flex items-center justify-between text-xs text-slate-500">
              <span>{statusLabel}</span>
              <span>{progress}%</span>
            </div>
            <div class="h-2 rounded-full bg-slate-200">
              <div
                class="h-2 rounded-full bg-blue-500 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            {currentNoteTitle && (
              <p class="mt-2 text-xs text-slate-500">
                {t('dialog.progress.currentNote', 'Aktuelle Notiz')}: <span class="font-medium text-slate-700">{currentNoteTitle}</span>
              </p>
            )}
            {errorMessage && (
              <p class="mt-2 rounded-md bg-red-50 px-3 py-2 text-xs text-red-600">{errorMessage}</p>
            )}
          </div>
        </section>

        <section class="rounded-xl border border-slate-200 bg-white p-5">
          <p class="text-sm font-semibold text-slate-900 mb-2">{t('dialog.instructions.title', 'So funktioniert der Import')}</p>
          <ol class="list-decimal space-y-2 pl-5 text-slate-600">
            {instructions.map((instruction, index) => (
              <li key={`${instruction}-${index}`}>{instruction}</li>
            ))}
          </ol>
        </section>

        <section class="grid gap-4 md:grid-cols-2">
          <div class="rounded-xl border border-slate-200 bg-white p-5">
            <p class="mb-3 text-sm font-semibold text-slate-900">{t('dialog.skipped.title', 'Übersprungene Notizen')}</p>
            {skippedEntries.length ? (
              <ul class="space-y-2 text-xs text-slate-600">
                {skippedEntries.slice(0, 6).map((entry) => (
                  <li key={entry.file} class="rounded-md border border-slate-100 px-3 py-2">
                    <p class="font-medium text-slate-800">{entry.file.split('/').pop() ?? entry.file}</p>
                    <p class="text-slate-500">{getSkippedReason(entry, t)}</p>
                    {entry.detail && entry.type === 'error' && (
                      <p class="text-[11px] text-slate-400">{entry.detail}</p>
                    )}
                  </li>
                ))}
                {skippedEntries.length > 6 && (
                  <li class="text-[11px] text-slate-400">+{skippedEntries.length - 6} {t('dialog.skipped.more', 'weitere')}</li>
                )}
              </ul>
            ) : (
              <p class="text-xs text-slate-500">{t('dialog.skipped.empty', 'Keine übersprungenen Notizen')}</p>
            )}
          </div>

          <div class="rounded-xl border border-slate-200 bg-white p-5">
            <p class="mb-3 text-sm font-semibold text-slate-900">{t('dialog.logs.title', 'Import-Protokoll')}</p>
            {importLogs.length ? (
              <ul class="space-y-2 text-xs text-slate-600">
                {importLogs.slice(-8).map((log, index) => (
                  <li
                    key={`${log.title}-${index}`}
                    class={`rounded-md px-3 py-2 ${
                      log.status === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'
                    }`}
                  >
                    <p class="font-medium">{log.title}</p>
                    {log.status === 'error' && log.message && (
                      <p class="text-[11px]">{log.message}</p>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p class="text-xs text-slate-500">{t('dialog.logs.empty', 'Noch kein Import gestartet')}</p>
            )}
          </div>
        </section>

        <section class="rounded-xl border border-blue-100 bg-blue-50 p-5 text-xs text-blue-700">
          <p class="font-semibold">{t('dialog.security.title', 'Datenschutz')}</p>
          <p>{t('dialog.security.description', 'Alle Daten bleiben lokal in deinem Browser. Es werden nur Notizen zu deinem Blinko-Konto hinzugefügt – es erfolgt kein Upload zu externen Diensten.')}</p>
        </section>

        <footer class="flex flex-wrap items-center justify-between gap-3">
          <div class="text-xs text-slate-500">
            {analysisTimestamp && (
              <span>
                {t('dialog.summary.analyzedAt', 'Analysiert')}: {formatDateTime(analysisTimestamp)}
              </span>
            )}
          </div>
          <div class="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={startImport}
              disabled={!canImport}
              class={`rounded-full px-5 py-2 text-sm font-semibold text-white shadow-sm ${
                canImport ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-300 cursor-not-allowed'
              }`}
            >
              {t('dialog.buttons.import', 'Notizen importieren')}
            </button>
            <button
              type="button"
              class="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
              onClick={resetState}
              disabled={!selectedFile}
            >
              {t('dialog.buttons.reset', 'Zurücksetzen')}
            </button>
            <button
              type="button"
              class="rounded-full border border-transparent px-4 py-2 text-sm text-slate-500 hover:text-slate-700"
              onClick={onClose}
            >
              {t('dialog.buttons.close', 'Schließen')}
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

function getSkippedReason(entry: SkippedNote, t: ReturnType<typeof useBlinkoTranslation>) {
  switch (entry.type) {
    case 'trashed':
      return t('dialog.skipped.reason.trashed', 'Im Papierkorb markiert');
    case 'empty':
      return t('dialog.skipped.reason.empty', 'Keine Inhalte gefunden');
    case 'error':
    default:
      return entry.detail || t('dialog.skipped.reason.error', 'Fehler beim Lesen der Datei');
  }
}

function formatBytes(bytes: number) {
  if (!Number.isFinite(bytes) || bytes <= 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB'];
  const exponent = Math.min(units.length - 1, Math.floor(Math.log(bytes) / Math.log(1024)));
  const value = bytes / Math.pow(1024, exponent);
  return `${value.toFixed(1)} ${units[exponent]}`;
}

function formatDateTime(date: Date) {
  return new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'short' }).format(date);
}

async function createNoteInBlinko(note: ImportableBlinkoNote) {
  const payload = {
    title: note.title,
    content: note.content,
    tags: note.tags
  };

  if (window.Blinko?.api?.note?.createNote?.mutate) {
    return window.Blinko.api.note.createNote.mutate(payload);
  }

  if (window.Blinko?.api?.note?.create?.mutate) {
    return window.Blinko.api.note.create.mutate(payload);
  }

  if (window.Blinko?.notes?.create) {
    return window.Blinko.notes.create(payload);
  }

  throw new Error('Blinko API ist nicht verfügbar.');
}

function useBlinkoTranslation() {
  return (key: string, fallback: string, params?: Record<string, unknown>) =>
    window.Blinko?.i18n?.t?.(key, params) ?? fallback;
}
