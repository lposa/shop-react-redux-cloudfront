/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
  plugins: [react()],
  build: {
    // Customize the build output directory (e.g., 'dist' becomes 'build')
    outDir: path.resolve(__dirname, "infra/resources/build"),
    // Optionally specify other build options
    assetsDir: "assets", // To customize assets directory
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
});
