import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/personal-web/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: './index.html',
      output: {
        format: 'es',
        entryFileNames: `assets/[name].[hash].mjs`,
        chunkFileNames: `assets/[name].[hash].mjs`,
        assetFileNames: `assets/[name].[hash].[ext]`
      }
    }
  }
})
