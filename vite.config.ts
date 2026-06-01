import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: resolve(__dirname, 'index.dev.html'),
    },
  },
  plugins: [
    react(),
    {
      name: 'serve-dev-index-at-root',
      apply: 'serve',
      configureServer(server) {
        server.middlewares.use((request, _response, next) => {
          const [path, query] = request.url?.split('?') ?? ['/']

          if (path === '/' || path === '/index.html') {
            request.url = `/index.dev.html${query ? `?${query}` : ''}`
          }

          next()
        })
      },
    },
  ],
})
