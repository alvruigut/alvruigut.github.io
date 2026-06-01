import { copyFile, rename } from 'node:fs/promises'
import { join } from 'node:path'

const distDir = 'dist'

await rename(join(distDir, 'index.dev.html'), join(distDir, 'index.html'))

try {
  await copyFile(join(distDir, 'index.html'), join(distDir, '404.html'))
} catch {
  // GitHub Pages can work without this fallback, but it helps direct SPA visits.
}
