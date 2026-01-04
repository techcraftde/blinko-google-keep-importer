/** @jsxImportSource preact */
/// <reference types="systemjs" />

import { render } from 'preact/compat';
import plugin from '../plugin.json';
import en from './locales/en.json';
import de from './locales/de.json';
import { KeepImporterDialog } from './components/KeepImporterDialog';

const ICON = `
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 3h12a2 2 0 0 1 2 2v13a1 1 0 0 1-1 1h-3l-3 3-3-3H5a1 1 0 0 1-1-1V5a2 2 0 0 1 2-2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M12 7v5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
  <path d="M9.5 9.5h5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>
`;

System.register([], (exports) => ({
  execute: () => {
    exports('default', class GoogleKeepImporterPlugin {
      withSettingPanel = false;
      private dialogContainers = new Set<HTMLElement>();
      private dialogClose?: () => void;

      constructor() {
        Object.assign(this, plugin);
      }

      init() {
        this.initI18n();
        this.registerToolbarIcon();
      }

      private openDialog = () => {
        const cleanup = () => {
          this.dialogContainers.forEach((node) => render(null, node));
          this.dialogContainers.clear();
          window.Blinko.closeDialog();
        };

        const dialogHandle = window.Blinko.showDialog({
          title: window.Blinko.i18n?.t('dialog.title') ?? 'Google Keep Import',
          width: 560,
          content: () => {
            const container = document.createElement('div');
            container.dataset.plugin = plugin.id;
            this.dialogContainers.add(container);
            render(<KeepImporterDialog onClose={cleanup} />, container);
            return container;
          }
        });

        this.dialogClose = dialogHandle?.close
          ? () => {
              dialogHandle.close?.();
              cleanup();
            }
          : cleanup;
      };

      private registerToolbarIcon() {
        window.Blinko.addToolBarIcon({
          name: plugin.id,
          placement: 'top',
          tooltip: window.Blinko.i18n?.t('toolbar.tooltip') ?? 'Google Keep Import',
          icon: ICON,
          onClick: this.openDialog
        });
      }

      private initI18n() {
        const i18n = window.Blinko?.i18n;
        if (!i18n) return;
        i18n.addResourceBundle('en', 'translation', en, true, true);
        i18n.addResourceBundle('de', 'translation', de, true, true);
      }

      destroy() {
        this.#dialogClose?.();
        if (window.Blinko.removeToolBarIcon) {
          window.Blinko.removeToolBarIcon(plugin.id);
        }
      }
    });
  }
}));
