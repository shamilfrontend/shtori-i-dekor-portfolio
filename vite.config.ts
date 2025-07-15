import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer';
import { resolve } from 'path';
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],

  css: { postcss: { plugins: [autoprefixer()] } },

  build: {
    rollupOptions: {
      output: {
        assetFileNames: assetInfo => {
          let extType = assetInfo.name?.split('.').at(1);
          if (extType && /png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        manualChunks: {
          libs: ['autoprefixer'],
          components: [],
        },
      },
    },
  },

  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      },
    ],
  },
})
