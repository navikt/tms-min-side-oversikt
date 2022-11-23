import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { viteMockServe } from "vite-plugin-mock";
import { terser } from "rollup-plugin-terser";
import EnvironmentPlugin from "vite-plugin-environment";
import { rollupImportMapPlugin } from "rollup-plugin-import-map";
import { resolve } from "path";

const reactUrl = "https://cdn.nav.no/min-side/shared/react/v18/react.production.min.js";
const reactDomUrl = "https://cdn.nav.no/min-side/shared/react-dom/v18/react-dom.production.min.js";

const imports = {
  react: reactUrl,
  "react-dom": reactDomUrl,
};

export default ({ command }) => ({
  plugins: [
    react(),
    terser(),
    cssInjectedByJsPlugin(),
    EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV || "development",
    }),
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
      fileName: () => "tms-min-side-oversikt.js",
    },
  },
  test: {
    global: true,
    environment: "jsdom",
    deps: {
      inline: ["@testing-library/user-event"],
    },
  },
  css: {
    modules: {
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
  },
});
