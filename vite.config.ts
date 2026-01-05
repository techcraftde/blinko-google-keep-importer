import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import blinkoPlugin from 'vite-plugin-blinko';

export default defineConfig(() => ({
  plugins: [
    preact(),
    ...blinkoPlugin()
  ],
  build: {
    emptyOutDir: true
  }
}));
