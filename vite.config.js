import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vuetify({
    autoImport: true,
    styles: {
      configFile: 'src/styles/settings.scss'
    }
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    port: 8080,
    proxy: {
      '^/smart-blogger-api/': {
        target: 'http://localhost:3000/',
        changeOrigin: true
      }
    }
  }
})
