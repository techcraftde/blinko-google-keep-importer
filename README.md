# Blinko – Google Keep Importer

Import Google Keep notes directly into Blinko, including labels, checklists and embedded attachments, via the official Blinko plugin interface.

## ✨ Features

- Drag & drop upload of the original Google Takeout `.zip` export
- Automatic parsing of every note JSON file as described in the [Blinko plugin template](https://github.com/blinko-space/blinko-plugin-template)
- Conversion of Google Keep HTML bodies, checklists, annotations and attachments into clean Markdown
- Tag migration that keeps your Google Keep labels as Blinko tags
- Real-time progress UI with skipped-note explanations and an import log
- Privacy-first workflow – everything runs inside the Blinko desktop/web client, only the final notes are created via the Blinko API

## 🚀 Usage

1. Open [Google Takeout](https://takeout.google.com), select **Google Keep**, choose `ZIP` as archive type and include both JSON data and media attachments.
2. Download the archive and keep it unchanged (do not unzip).
3. In Blinko, install this plugin from the Marketplace via the GitHub URL of this repository.
4. Launch the importer either from the toolbar button "Google Keep Import" or via **Settings → Import → Start Google Keep import**.
5. Drop your Takeout ZIP into the dialog, review the detected notes, skipped entries and log output, then run the import.

## 🧑‍💻 Development

```bash
# install dependencies
npm install

# start the Blinko dev server (recommended, matches template plugin)
npm run dev

# alternatively start plain Vite
npm run dev:vite

# create a production build in release/
npm run build
```

The project uses the official Blinko plugin toolchain (`vite-plugin-blinko`) plus Preact for the UI.

## 📦 Publishing / Marketplace

Blinko loads the built plugin bundle from `release/index.js`.

1. Update `plugin.json` and `package.json` versions in sync.
2. Run `npm run build` (or `npm run release:publish`).
3. Commit & push `plugin.json`, `release/index.js`, and `README.md`.
4. Install/submit the GitHub URL in the Blinko Marketplace.

## 🔒 Privacy & Security

- ZIP files are processed completely in-browser using `JSZip` and never leave the client.
- Attachments are embedded as `data:` URLs solely for the note content that will be stored in Blinko.
- Errors are surfaced directly in the UI so you can re-run the import safely.

## 📝 License

MIT – see [LICENSE](LICENSE).
