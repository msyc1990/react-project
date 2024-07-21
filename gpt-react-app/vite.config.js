import { defineConfig } from "vite";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), libInjectCss()],
  rollupOptions: {
    output: {
      // Put chunk files at <output>/chunks
      chunkFileNames: "chunks/[name].[hash].js",
      // Put chunk styles at <output>/assets
      assetFileNames: "assets/[name][extname]",
      entryFileNames: "[name].js",
    },
  },
});
