import { resolve } from "node:path";
import { defineConfig } from "vite";
import JavaScriptObfuscator from "javascript-obfuscator";
import { minify } from "html-minifier-terser";

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

function obfuscateProductionHtml() {
  return {
    name: "obfuscate-production-html",
    enforce: "post",
    apply: "build",
    async generateBundle(_, bundle) {
      for (const [fileName, asset] of Object.entries(bundle)) {
        if (fileName.endsWith(".html") && asset.type === "asset" && typeof asset.source === "string") {
          asset.source = await minify(asset.source, {
            collapseWhitespace: true,
            removeComments: true,
            minifyCSS: true,
            minifyJS: true,
            removeAttributeQuotes: true,
            removeOptionalTags: true,
            collapseBooleanAttributes: true,
          });
        }
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
        bullionMaster: resolve("bullion-master.html"),
        privacy: resolve("privacy-policy.html"),
        terms: resolve("terms-and-conditions.html"),
      },
    },
  },
  plugins: [obfuscateProductionJs(), obfuscateProductionHtml()],
});
