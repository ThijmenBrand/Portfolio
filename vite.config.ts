import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [
    vue(),
    vuetify({
      autoImport: true,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/style/global.scss";`,
      },
    },
  },
  build: {
    outDir: "C:/xampp/htdocs",
  },
  server: {
    port: 3000,
    open: true,
    cors: true,
  },
  base: "./",
});
