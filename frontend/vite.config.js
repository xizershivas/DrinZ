import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/DrinZ",
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5139',
        changeOrigin: true,
      },
    },
  },
})
