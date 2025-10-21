import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import * as path from "node:path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  build: {
    outDir: 'dist',
    minify: 'terser', // Enable minification
    cssCodeSplit: true, // Split CSS for better caching
    sourcemap: false, // Disable sourcemaps in production for smaller bundles
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
        },
        // Optimize chunk naming for better caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    chunkSizeWarningLimit: 1000,
    emptyOutDir: true,
    // Enable compression and optimization
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true
      }
    }
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