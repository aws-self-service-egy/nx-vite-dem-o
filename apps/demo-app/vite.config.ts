import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/demo-app',
  plugins: [react()],
  
  // Optimize deps to help with caching
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  
  // Server configuration
  server: {
    port: 4200,
    host: 'localhost',
    fs: {
      // Allow serving files from one level up from the workspace root
      allow: ['../..']
    }
  },
  
  // Build configuration optimized for caching
  build: {
    outDir: './dist',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      // Optimize chunk splitting for better caching
      output: {
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  },
  
  // Define for environment variables
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  }
})