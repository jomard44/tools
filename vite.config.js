import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable minification
    minify: "terser",
    // Configure Terser
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Split chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          utils: [
            "marked",
            "react-syntax-highlighter",
            "react-copy-to-clipboard",
          ],
        },
      },
    },
  },
  server: {
    // Enable CORS for development
    cors: true,
    // Configure port
    port: 5173,
  },
  // Add base URL for production deployment
  base: "/",
});
