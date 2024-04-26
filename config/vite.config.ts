import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

const __dirname = fileURLToPath(new URL("../", import.meta.url));

export default defineConfig((config) => {
  const { command, mode } = config;

  const plugins = [react()];

  if (command === "serve") {
    return {
      root: resolve(__dirname, "packages/home-page"),
      plugins,
    };
  }

  if (mode === "ui") {
    return {
      root: resolve(__dirname, "packages/home-page"),
      plugins,
    };
  }

  if (mode === "homepage") {
    return {
      root: resolve(__dirname, "packages/home-page"),
      plugins,
    };
  }

  return {};
});
