import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/pages": path.resolve(__dirname, "./src/pages"),
      "@/hooks": path.resolve(__dirname, "./src/hooks"),
      "@/contexts": path.resolve(__dirname, "./src/contexts"),
      "@/types": path.resolve(__dirname, "./src/types"),
      "@/locales": path.resolve(__dirname, "./src/locales"),
      "@/theme": path.resolve(__dirname, "./src/theme"),
      "@/utils": path.resolve(__dirname, "./src/utils"),
      "@/styles": path.resolve(__dirname, "./src/styles"),
    },
  },
});
