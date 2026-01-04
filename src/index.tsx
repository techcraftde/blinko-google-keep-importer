/** @jsxImportSource preact */
/// <reference types="systemjs" />
import { render } from 'preact/compat';
import type { BasePlugin } from 'blinko';
import plugin from '../plugin.json';
import { ImportUI } from './ImportUI';
import en from './locales/en.json';
import de from './locales/de.json';

/**
 * Google Keep Importer Plugin
 * Imports Google Keep notes from JSON export files
 */
System.register([], (exports) => ({
  execute: () => {
    exports('default', class KeepImporterPlugin implements BasePlugin {
      constructor() {
        Object.assign(this, plugin);
      }

      /**
       * Initialize the plugin
       */
      async init() {
        this.initI18n();
        
        // Add toolbar icon for import
        window.Blinko.addToolBarIcon({
          name: "keep-importer",
          icon: `<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'/><polyline points='7 10 12 15 17 10'/><line x1='12' y1='15' x2='12' y2='3'/></svg>`,
          placement: 'top',
          tooltip: 'Import Google Keep Notes',
          content: () => {
            const container = document.createElement('div');
            container.setAttribute('data-plugin', 'keep-importer');
            render(<ImportUI />, container);
            return container;
          }
        });
      }

      /**
       * Initialize internationalization
       */
      initI18n() {
        window.Blinko.i18n.addResourceBundle('en', 'translation', en);
        window.Blinko.i18n.addResourceBundle('de', 'translation', de);
      }

      /**
       * Cleanup when plugin is disabled
       */
      destroy() {
        console.log('Google Keep Importer plugin destroyed');
      }
    });
  }
}));
