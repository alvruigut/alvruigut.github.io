import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, rmSync } from 'node:fs'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'rename-dev-index',
      apply: 'build',
      closeBundle() {
        copyFileSync(resolve(__dirname, 'dist/index.dev.html'), resolve(__dirname, 'dist/index.html'))
        rmSync(resolve(__dirname, 'dist/index.dev.html'))
      },
    },
  ],
  build: {
    rollupOptions: {
      input: resolve(__dirname, 'index.dev.html'),
    },
  },
})
