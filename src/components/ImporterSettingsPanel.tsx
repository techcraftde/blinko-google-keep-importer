import type { JSX } from 'preact';

interface ImporterSettingsPanelProps {
  onOpenImporter: () => void;
}

export function ImporterSettingsPanel({ onOpenImporter }: ImporterSettingsPanelProps): JSX.Element {
  const t = useBlinkoTranslation();

  return (
    <div class="max-w-3xl w-full text-sm text-slate-800">
      <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {t('settings.import.sectionLabel', 'Import')}
        </p>
        <div class="mt-3 space-y-2">
          <h2 class="text-xl font-semibold text-slate-900">
            {t('settings.import.title', 'Import Google Keep notes')}
          </h2>
          <p class="text-sm text-slate-600">
            {t(
              'settings.import.description',
              'Launch the importer directly from the settings to migrate notes, labels and attachments from your Google Takeout ZIP.'
            )}
          </p>
        </div>
        <div class="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
            onClick={onOpenImporter}
          >
            {t('settings.import.button', 'Start Google Keep import')}
          </button>
          <p class="text-xs text-slate-500">
            {t('settings.import.hint', 'You can also start the importer via the toolbar icon at the top of Blinko.')}
          </p>
        </div>
      </section>
    </div>
  );
}

function useBlinkoTranslation() {
  return (key: string, fallback: string, params?: Record<string, unknown>) =>
    window.Blinko?.i18n?.t?.(key, params) ?? fallback;
}
