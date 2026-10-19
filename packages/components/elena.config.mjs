import { fileURLToPath } from "node:url";
import { entryTypesPlugin } from "./cem-entry-types.mjs";

/**
 * @type {import("@elenajs/bundler").ElenaConfig}
 */
export default {
  input: "src",
  output: {
    dir: "dist",
    format: "esm",
    sourcemap: true,
    filename: "bundle.js",
  },
  bundle: "src/index.js",
  analyze: {
    plugins: [
      // Types for the package entry: dist/bundle.d.ts sits next to dist/bundle.js.
      entryTypesPlugin({
        entry: "src/index.js",
        outdir: fileURLToPath(new URL("./dist", import.meta.url)),
        fileName: "bundle.d.ts",
      }),
    ],
  },
};
