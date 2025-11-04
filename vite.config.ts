import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/personal-web/',
  build: {
    modulePreload: {
      polyfill: true
    },
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  }
})
