import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from "node:path";

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui': [
            'framer-motion',
            'lucide-react',
            'react-slick',
            'swiper',
            'typewriter-effect'
          ],
          'analytics': [
            '@microsoft/clarity',
            '@supabase/supabase-js'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    emptyOutDir: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    open: true
  }
})