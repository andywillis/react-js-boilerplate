import { splitVendorChunkPlugin, defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

import compress from 'vite-plugin-compression';

export default defineConfig({
  plugins: [ react(), splitVendorChunkPlugin(), compress() ],
  root: 'src',
  server: {
    port: 3000,
    proxy: {
      '/json': {
        target: 'https://localhost:4000',
        secure: false,
        changeOrigin: true
      }
    }
  },
  build: {
    target: 'esnext',
    outDir: '../build',
    sourcemap: true
  }
});
