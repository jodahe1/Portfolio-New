import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    port: 4173,
    strictPort: true,
    host: true, // Add this line
    allowedHosts: [
      'portfolio-new-8l25.onrender.com', //  Render URL
      'localhost' // For local development
    ]
  },
  server: {
    port: 4173,
    strictPort: true,
    host: true
  }
})