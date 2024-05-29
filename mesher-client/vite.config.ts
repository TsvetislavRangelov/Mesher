import { defineConfig } from 'vite'
import fs from 'fs';
import path from 'path';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port: 3000,
    https: {
      key: fs.readFileSync(path.resolve(__dirname, '../deploy/local/www.example.com.key')),
      cert: fs.readFileSync(path.resolve(__dirname, '../deploy/local/www.example.com.crt'))
    }
  }
})
