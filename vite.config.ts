import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  plugins: [preact()],
  build: {
    lib: {
      entry: './src/index.ts',
      formats: ['system'],
      fileName: () => 'index.js'
    },
    rollupOptions: {
      external: ['react', '@blinkospace/sdk', 'systemjs']
    },
    outDir: 'release'
  }
});
