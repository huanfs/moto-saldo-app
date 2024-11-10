import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components":path.resolve(__dirname, "./src/components"),
      "@context":path.resolve(__dirname, "./src/context"),
      "@routes":path.resolve(__dirname, "./src/routes"),
      "@images":path.resolve(__dirname, "./src/assets/images"),
      "@styles":path.resolve(__dirname, "./src/styles"),
      "@utils":path.resolve(__dirname, "./src/utils"),
      "@api":path.resolve(__dirname, "./src/api"),
    }
  }
})
