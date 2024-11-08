/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// resolve: {
//   alias: {
//     "@": path.resolve(__dirname, "./src"),
//     "@screenshots": path.resolve(__dirname, "public", "screenshots"),
//   }
// },

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom"
  }
})
