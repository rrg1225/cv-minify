import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    port: 3000, // 固定本地开发端口为 3000
    open: true  // 启动服务时自动在浏览器中打开页面
  }
})