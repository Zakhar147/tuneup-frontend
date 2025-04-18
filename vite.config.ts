import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { alphaTab } from '@coderline/alphatab/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  base: "/",
  plugins: [react(), alphaTab()],
})
