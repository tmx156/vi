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
        // Optimized chunking for better caching
        chunkFileNames: (chunkInfo) => {
          // Vendor libraries get stable chunk names
          if (chunkInfo.name === 'vendor' || chunkInfo.facadeModuleId?.includes('node_modules')) {
            return 'assets/vendor-[hash].js';
          }
          // UI components get grouped together
          if (chunkInfo.facadeModuleId?.includes('/ui/')) {
            return 'assets/ui-[hash].js';
          }
          return 'assets/[name]-[hash].js';
        },
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        // Manual chunking for better cache efficiency
        manualChunks: (id) => {
          // Vendor chunk for core React libraries
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('wouter')) {
              return 'vendor';
            }
            // UI chunk for Radix components
            if (id.includes('@radix-ui')) {
              return 'ui';
            }
            // Utils chunk for smaller utilities
            if (id.includes('clsx') || id.includes('class-variance-authority') || id.includes('tailwind-merge')) {
              return 'utils';
            }
            // Heavy libraries that should be separate
            if (id.includes('three') || id.includes('framer-motion')) {
              return 'heavy';
            }
          }
        }
      },
      // Enhanced tree shaking
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        unknownGlobalSideEffects: false
      },
    },
    // Mobile optimizations
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096,
    sourcemap: false,
    reportCompressedSize: false,
    cssCodeSplit: true,
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
  // Enhanced dependency optimization
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'wouter',
      'clsx',
      'class-variance-authority',
      'tailwind-merge'
    ],
    // Exclude heavy dependencies - will be dynamically imported
    exclude: [
      'framer-motion',
      'three',
      '@types/three',
      'embla-carousel-react',
      'recharts'
    ],
    // Force optimize critical UI components
    force: true
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
