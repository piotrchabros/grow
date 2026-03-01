/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => ({
  root: import.meta.dirname,
  cacheDir: '../../node_modules/.vite/apps/ai-ecommerce-grow',
  server: {
    port: 4209,
    host: 'localhost',
    strictPort: true,
  },
  preview: {
    port: 4209,
    host: 'localhost',
    strictPort: true,
  },
  resolve: {
    conditions: ['@org/source'],
  },
  plugins: [react()],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [],
  // },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
}));
