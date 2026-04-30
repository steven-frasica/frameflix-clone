import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/frameflix-clone/' : '/',
  build: {
    outDir: 'docs',
  },
  plugins: [react()],
}))
