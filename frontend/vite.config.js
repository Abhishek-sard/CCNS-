import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    port: 5173,
    host: true
  },
  define: {
    // Suppress console warnings from browser extensions
    global: 'globalThis',
  },
  esbuild: {
    // Suppress specific warnings
    logOverride: {
      'this-is-undefined-in-esm': 'silent'
    }
  }
})