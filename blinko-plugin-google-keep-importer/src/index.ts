import { importFromKeepExport, BlinkNote } from './keepConverter';
import { importFromFileDialogAndImportToBlinko, initBlinkoUiHook } from './importUi';

export interface ImportResult {
  notes: BlinkNote[];
}

// Entry point: convert Google Keep export JSON into Blinko-compatible notes
export async function importFromGoogleKeepExport(keepExportJson: any): Promise<ImportResult> {
  const notes = importFromKeepExport(keepExportJson);
  return { notes };
}

// UI/Runtime hooks for BlinkO integration
export { importFromFileDialogAndImportToBlinko, initBlinkoUiHook };

const plugin = {
  id: 'blinko-plugin-google-keep-importer',
  name: 'Google Keep Importer',
  version: '0.2.0',
  // Expose a generic importer function for the Blink0 runtime to call
  importFromGoogleKeepExport
};

export default plugin;
