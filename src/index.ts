import { BlinkoPlugin, definePlugin } from '@blinkospace/sdk';
import { KeepImporterDialog } from './components/KeepImporterDialog';

export default definePlugin({
  id: 'google-keep-importer',
  name: 'Google Keep Importer',
  version: '1.0.0',
  settings: {
    googleKeepFolder: ''
  },

  commands: [
    {
      id: 'import-google-keep',
      name: 'Google Keep importieren',
      callback: async (app: BlinkoPlugin) => {
        app.dialog.openDialog({
          title: 'Google Keep Import',
          content: <KeepImporterDialog onClose={() => app.dialog.closeDialog()} />
        });
      }
    }
  ],

  init(app: BlinkoPlugin) {
    console.log('Google Keep Importer Plugin geladen!');
  }
});