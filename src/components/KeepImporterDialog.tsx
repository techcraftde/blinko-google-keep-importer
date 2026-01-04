import React, { useState } from 'react';
import { GoogleKeepImporter } from '../keepImporter';
import { useBlinko } from '@blinkospace/sdk';

interface KeepImporterDialogProps {
  onClose: () => void;
}

export const KeepImporterDialog: React.FC<KeepImporterDialogProps> = ({ onClose }) => {
  const [folderPath, setFolderPath] = useState('');
  const [isImporting, setIsImporting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [importedCount, setImportedCount] = useState(0);
  const blinko = useBlinko();

  const handleImport = async () => {
    setIsImporting(true);
    try {
      const importer = new GoogleKeepImporter(folderPath);
      const notes = await importer.importAllNotes();

      // Notizen nach Blinko hochladen
      for (let i = 0; i < notes.length; i++) {
        await blinko.notes.create(notes[i]);
        setProgress(((i + 1) / notes.length) * 100);
      }

      setImportedCount(notes.length);
    } catch (error) {
      console.error('Import Fehler:', error);
    } finally {
      setIsImporting(false);
      setTimeout(onClose, 2000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Google Keep Import</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Google Keep Ordner</label>
            <input
              type="text"
              value={folderPath}
              onChange={(e) => setFolderPath(e.target.value)}
              placeholder="Pfad zum Keep-Ordner (takeout/Keep/)"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              Exportiere zuerst über Google Takeout → Keep
            </p>
          </div>

          {isImporting ? (
            <div className="space-y-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-center">Importiere {Math.round(progress)}%...</p>
            </div>
          ) : (
            <button
              onClick={handleImport}
              disabled={!folderPath}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {importedCount > 0 ? `Erneut importieren (${importedCount} Notizen)` : 'Import starten'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};