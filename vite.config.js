import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { viteMockServe } from "vite-plugin-mock";
import { terser } from "rollup-plugin-terser";
import { rollupImportMapPlugin } from "rollup-plugin-import-map";
import { resolve } from "path";

const reactUrl = "https://min-side-assets.dev.intern.nav.no/react/17/esm/index.js";
const reactDomUrl = "https://min-side-assets.dev.intern.nav.no/react-dom/17/esm/index.js";

const imports = {
  react: reactUrl,
  "react-dom": reactDomUrl,
};

export default ({ command }) => ({
  plugins: [
    react(),
    terser(),
    cssInjectedByJsPlugin(),
    viteMockServe({
      mockPath: "mock",
      localEnabled: command === "serve",
    }),
    {
      ...rollupImportMapPlugin({ imports }),
      enforce: "pre",
      apply: "build",
    },
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/Mikrofrontend.jsx"),
      name: "tms-min-side-oversikt",
      formats: ["es"],
      fileName: () => `bundle.js`,
    },
  },
  test: {
    global: true,
    environment: "jsdom",
    deps: {
      inline: ["@testing-library/user-event"],
    },
  },
});
