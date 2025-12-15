import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/future.ai/',   // 👈 IMPORTANT (repo name)
  plugins: [react()],
})

