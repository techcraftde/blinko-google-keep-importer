# Blinko Google Keep Importer

Import Google Keep Notizen (mit Tags und HTML-Formatierung) in Blinko.

Hinweis: Google Keep exportiert Notizen oft als JSON mit Feldern wie `title`, `textContent` (HTML) und `labels` (Tags). Dieses Plugin nimmt solche Exportdaten entgegen und wandelt sie in Blinko-kompatible Notizen um.

## Nutzung
- Exportiere deine Google Keep Notizen via Google Takeout (JSON-Export).
- Öffne das Blink0-Plugin-Verzeichnis und importiere die exportierte JSON-Datei über den Import-Dialog des Plugins (API-Schnittstelle je nach Blinko-Version).
- Die importierten Notizen behalten Titel, HTML-Body (einschließlich Formatierungen) und Tags.

## UI-Import über BlinkO
- Nach Installation des Plugins erscheint eine Aktion "Import Google Keep JSON" im BlinkO-UI-Menü.
- Wähle eine JSON-Datei deiner Google Keep-Exportdaten aus, um Notizen direkt zu BlinkO zu importieren.
- Die Import-Logik beachtet Titel, HTML-Body und Tags.

## Beispiel JSON (Ausschnitt)
```json
{
  "notes": [
    {
      "id": "note1",
      "title": "Meeting Notes",
      "textContent": "<p>Besprechung <strong>wichtige Punkte</strong>.</p>",
      "labels": ["tag1", "tag2"]
    }
  ]
}
```

## Tests und Testdaten
- Beispiel-Exportdaten finden Sie unter `testdata/keep_export_sample.json`.
- Ein kleines TS-Testskript befindet sich unter `test/run_converter_test.ts`, das die Konvertierung demonstriert.
