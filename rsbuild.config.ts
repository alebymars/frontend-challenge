import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  output: {
    distPath: {
      root: "build",
    },
    assetPrefix: "https://alebymars.github.io/frontend-challenge",
  },
  html: {
    template: "./public/index.html",
  },
});
