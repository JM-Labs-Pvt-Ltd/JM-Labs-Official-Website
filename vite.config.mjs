import { resolve } from "node:path";
import { defineConfig } from "vite";
import JavaScriptObfuscator from "javascript-obfuscator";

function obfuscateProductionJs() {
  return {
    name: "obfuscate-production-js",
    apply: "build",
    enforce: "post",
    generateBundle(_, bundle) {
      for (const entry of Object.values(bundle)) {
        if (entry.type !== "chunk" || !entry.fileName.endsWith(".js")) {
          continue;
        }

        const obfuscated = JavaScriptObfuscator.obfuscate(entry.code, {
          compact: true,
          controlFlowFlattening: false,
          deadCodeInjection: false,
          identifierNamesGenerator: "hexadecimal",
          renameGlobals: false,
          selfDefending: false,
          simplify: true,
          splitStrings: false,
          stringArray: true,
          stringArrayThreshold: 0.75,
          transformObjectKeys: true,
          unicodeEscapeSequence: false,
        });

        entry.code = obfuscated.getObfuscatedCode();
      }
    },
  };
}

export default defineConfig({
  base: "./",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    assetsDir: "assets",
    cssMinify: true,
    minify: "esbuild",
    sourcemap: false,
    modulePreload: false,
    rollupOptions: {
      input: {
        home: resolve("index.html"),
        products: resolve("product-details.html"),
        bullionMaster: resolve("bullion-master.html"),
        privacy: resolve("privacy-policy.html"),
        terms: resolve("terms-and-conditions.html"),
      },
    },
  },
  plugins: [obfuscateProductionJs()],
});
