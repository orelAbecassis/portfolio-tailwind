import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],

  base: '/orelAbecassis-portfolio/', 

  server: {
    proxy: {
      '/api': 'http://localhost:3000' 
    }
  },
})
