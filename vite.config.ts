import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
    // Aggressive mobile optimization settings
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        dead_code: true,
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        // Let Vite handle chunking automatically
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
      // Tree shaking optimizations
      treeshake: {
        moduleSideEffects: false,
      },
    },
    // Ultra-aggressive optimizations for mobile
    chunkSizeWarningLimit: 500, // Smaller chunks for mobile
    assetsInlineLimit: 2048, // Smaller inline limit for mobile networks
    sourcemap: false, // Disable sourcemaps in production for smaller files
    reportCompressedSize: false, // Disable to speed up build
    cssCodeSplit: true, // Enable CSS code splitting
  },
  server: {
    port: 5173,
    host: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
  // Mobile performance optimizations
  optimizeDeps: {
    include: ['react', 'react-dom', 'wouter'],
    // Exclude heavy dependencies from pre-bundling for faster dev start
    exclude: ['framer-motion', 'three'],
  },
  // Critical performance settings
  esbuild: {
    target: 'es2015',
    treeShaking: true,
    // Remove console logs in production
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
  },
  // Aggressive CSS optimizations
  css: {
    devSourcemap: false,
    preprocessorOptions: {
      // Optimize CSS for mobile
      scss: {
        additionalData: `
          $mobile-first: true;
          $performance-mode: true;
        `,
      },
    },
  },
});
