// server/index.ts
import express2 from "express";

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
var __dirname = path.dirname(fileURLToPath(import.meta.url));
var vite_config_default = defineConfig({
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets")
    }
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
    // Aggressive mobile optimization settings
    target: "es2015",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        dead_code: true
      },
      mangle: {
        safari10: true
      },
      format: {
        comments: false
      }
    },
    rollupOptions: {
      output: {
        // Optimized chunking for better caching
        chunkFileNames: (chunkInfo) => {
          if (chunkInfo.name === "vendor" || chunkInfo.facadeModuleId?.includes("node_modules")) {
            return "assets/vendor-[hash].js";
          }
          if (chunkInfo.facadeModuleId?.includes("/ui/")) {
            return "assets/ui-[hash].js";
          }
          return "assets/[name]-[hash].js";
        },
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
        // Manual chunking for better cache efficiency
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("wouter")) {
              return "vendor";
            }
            if (id.includes("@radix-ui")) {
              return "ui";
            }
            if (id.includes("clsx") || id.includes("class-variance-authority") || id.includes("tailwind-merge")) {
              return "utils";
            }
            if (id.includes("three") || id.includes("framer-motion")) {
              return "heavy";
            }
          }
        }
      },
      // Enhanced tree shaking
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        unknownGlobalSideEffects: false
      }
    },
    // Mobile optimizations
    chunkSizeWarningLimit: 1e3,
    assetsInlineLimit: 4096,
    sourcemap: false,
    reportCompressedSize: false,
    cssCodeSplit: true
  },
  server: {
    port: 5173,
    host: true,
    fs: {
      strict: true,
      deny: ["**/.*"]
    },
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true
      }
    }
  },
  // Enhanced dependency optimization
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "wouter",
      "clsx",
      "class-variance-authority",
      "tailwind-merge"
    ],
    // Exclude heavy dependencies - will be dynamically imported
    exclude: [
      "framer-motion",
      "three",
      "@types/three",
      "embla-carousel-react",
      "recharts"
    ],
    // Force optimize critical UI components
    force: true
  },
  // Critical performance settings
  esbuild: {
    target: "es2015",
    treeShaking: true,
    // Remove console logs in production
    drop: process.env.NODE_ENV === "production" ? ["console", "debugger"] : []
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
        `
      }
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server2) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server: server2 },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
var server = null;
var appInitialized = false;
async function initializeApp() {
  if (appInitialized) return server;
  const { createServer } = await import("http");
  server = createServer(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  appInitialized = true;
  return server;
}
if (process.env.NODE_ENV === "production") {
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
  });
  serveStatic(app);
}
var index_default = app;
if (process.env.NODE_ENV !== "production") {
  (async () => {
    const server2 = await initializeApp();
    const port = parseInt(process.env.PORT || "5000", 10);
    server2.listen({
      port,
      host: "localhost"
    }, () => {
      log(`serving on port ${port}`);
    });
  })();
}
export {
  index_default as default
};
