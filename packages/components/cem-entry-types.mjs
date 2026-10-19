import { writeFileSync } from "node:fs";
import { join, posix } from "node:path";

/**
 * Custom Elements Manifest plugin that writes a declaration file for the
 * bundle entry, so `import { SnapButton } from "@select-networx/snapx-ds"`
 * type-checks in consumers.
 *
 * Elena only emits per-component `.d.ts` files. This re-exports them under
 * the names the entry exports, and adds each element to
 * `HTMLElementTagNameMap` so e.g. `querySelector("snap-button")` is typed.
 *
 * @param {{ entry: string; outdir: string; fileName: string }} options
 */
export function entryTypesPlugin({ entry, outdir, fileName }) {
  return {
    name: "entry-types",

    packageLinkPhase({ customElementsManifest }) {
      const { modules } = customElementsManifest;
      const entryModule = modules.find(m => m.path === entry);
      if (!entryModule) {
        throw new Error(`[entry-types]: Entry "${entry}" was not found in the manifest.`);
      }

      const imports = [];
      const names = [];
      const tags = [];

      for (const exp of entryModule.exports ?? []) {
        const source = exp.declaration?.module;
        const modulePath = source && posix.join(posix.dirname(entry), source);
        const element = modules
          .find(m => m.path === modulePath)
          ?.declarations?.find(d => d.tagName);

        // Elena only generates declarations for custom element modules.
        if (exp.kind !== "js" || !element) {
          console.warn(`[entry-types]: No types generated for export "${exp.name}" of ${entry}.`);
          continue;
        }

        const dts = `./${posix.basename(modulePath).replace(/\.(js|ts)$/, ".js")}`;
        imports.push(`import { ${exp.declaration.name} as ${exp.name} } from "${dts}";`);
        names.push(exp.name);
        tags.push(`    "${element.tagName}": ${exp.name};`);
      }

      const content = [
        ...imports,
        "",
        `export { ${names.join(", ")} };`,
        "",
        "declare global {",
        "  interface HTMLElementTagNameMap {",
        ...tags,
        "  }",
        "}",
        "",
      ].join("\n");

      writeFileSync(join(outdir, fileName), content);
    },
  };
}
