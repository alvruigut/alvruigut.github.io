import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-public-directory-indexes',
      apply: 'serve',
      configureServer(server) {
        server.middlewares.use((request, response, next) => {
          const path = request.url?.split('?')[0]

          if (!path?.endsWith('/')) {
            next()
            return
          }

          const filePath = join(server.config.root, 'public', path, 'index.html')

          if (!existsSync(filePath)) {
            next()
            return
          }

          response.setHeader('Content-Type', 'text/html; charset=utf-8')
          response.end(readFileSync(filePath))
        })
      },
    },
  ],
})
