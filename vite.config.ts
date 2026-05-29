import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'remove-old-dev-index-route',
      apply: 'serve',
      configureServer(server) {
        server.middlewares.use((request, response, next) => {
          if (request.url?.split('?')[0] === '/index.dev.html') {
            response.statusCode = 404
            response.end('Not found')
            return
          }

          next()
        })
      },
    },
  ],
})
