import { readFileSync } from 'fs';
import { importFromKeepExport } from './keepConverter';

// Read JSON from a BlinkO dialog if available, otherwise fall back to an HTML file input
async function readJsonFromBlinkoDialog(): Promise<string | null> {
  // Try BlinkO native file dialog
  try {
    const api = typeof window !== 'undefined' ? (window as any).Blinko : null;
    if (api && typeof api.showOpenDialog === 'function') {
      const res = await api.showOpenDialog({ title: 'Open Google Keep JSON Export', filters: [{ name: 'JSON', extensions: ['json'] }] });
      if (res?.canceled) return null;
      const filePath = res?.filePaths?.[0];
      if (filePath && typeof api.readFile === 'function') {
        return await api.readFile(filePath);
      }
      // If showOpenDialog exists but readFile is not exposed, bail out gracefully
      if (filePath) {
        console.warn('Blinko readFile not available to read selected path.');
      }
      return null;
    }
  } catch {
    // ignore and fallback
  }
  // Fallback: use a hidden HTML input for file selection (works in browser-like environments)
  return new Promise<(string | null)>(resolve => {
    try {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.json,application/json';
      input.style.display = 'none';
      input.onchange = async () => {
        const f = input.files?.[0];
        if (!f) { resolve(null); return; }
        try {
          const text = await f.text();
          resolve(text);
        } catch {
          resolve(null);
        }
        input.remove();
      };
      document.body.appendChild(input);
      input.click();
    } catch {
      resolve(null);
    }
  });
}

export async function importFromFileDialogAndImportToBlinko(): Promise<void> {
  const text = await readJsonFromBlinkoDialog();
  if (!text) {
    console.log('No JSON content loaded for Google Keep import.');
    return;
  }
  try {
    const json = JSON.parse(text);
    // Build BlinkNotes from the Google Keep export
    const rawNotes = importFromKeepExport(json);
    const notes = rawNotes;
    if (!notes || notes.length === 0) {
      console.log('No notes found in the provided Google Keep export.');
      return;
    }
    const api = typeof window !== 'undefined' ? (window as any).Blinko : null;
    if (api && typeof api.createNotes === 'function') {
      await api.createNotes(notes);
      console.log(`Imported ${notes.length} notes into BlinkO.`);
    } else if (api && typeof api.importNotes === 'function') {
      await api.importNotes(notes);
      console.log(`Imported ${notes.length} notes into BlinkO (via importNotes).`);
    } else {
      console.log('Blinko API not available. The converted notes are ready for import:', notes);
    }
  } catch (e) {
    console.error('Failed to import Google Keep export into BlinkO:', e);
  }
}

export async function initBlinkoUiHook(): Promise<void> {
  try {
    const api = typeof window !== 'undefined' ? (window as any).Blinko : null;
    if (api && typeof api.registerPluginAction === 'function') {
      api.registerPluginAction({
        id: 'google-keep-import',
        label: 'Import Google Keep JSON',
        action: async () => { await importFromFileDialogAndImportToBlinko(); }
      });
      console.log('BlinkO plugin UI registered: Import Google Keep JSON');
    } else {
      console.log('BlinkO UI API not available; skipping registration.');
    }
  } catch (e) {
    console.warn('Blinko UI hook initialization failed', e);
  }
}
