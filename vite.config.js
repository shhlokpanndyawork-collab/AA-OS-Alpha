import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'AA-OS Command Nexus',
        short_name: 'AA-OS',
        description: 'Abyssborn Architect Operating System',
        theme_color: '#0a0a0f',
        background_color: '#0a0a0f',
        display: 'standalone',
        orientation: 'any',
        icons: [
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg}'],
        runtimeCaching: [
          { urlPattern: /^https:\/\/api\.groq\.com\/.*/i, handler: 'NetworkOnly' },
          { urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i, handler: 'CacheFirst' },
          { urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i, handler: 'CacheFirst' },
        ]
      }
    })
  ]
})
