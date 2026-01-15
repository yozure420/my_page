import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        work: resolve(__dirname, 'work.html'),
      }
    }
  },
  server: {
    host: true,      // 0.0.0.0 で待機
    port: 5173,      // ポートを5173に固定
    watch: {
      usePolling: true, // Windows環境などでホットリロードが効かない場合に必要
    },
    allowedHosts: ["yozure.hal-tokyo-event.com"]
  },
})
