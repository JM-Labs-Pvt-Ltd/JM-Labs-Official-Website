import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
    base: "./",
    plugins: [react(), tailwindcss()],
    server: {
        allowedHosts: ["unmedieval-semioratorically-kannon.ngrok-free.dev"],
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
    build: {
        outDir: "dist",
        emptyOutDir: true,
        assetsDir: "assets",
        sourcemap: false,
        rollupOptions: {
            input: {
                home: resolve(__dirname, "index.html"),
                bullionMaster: resolve(__dirname, "bullion-master.html"),
                upcomingProduct: resolve(__dirname, "next-product.html"),
                about: resolve(__dirname, "about.html"),
                privacy: resolve(__dirname, "privacy-policy.html"),
                terms: resolve(__dirname, "terms-and-conditions.html"),
                blog: resolve(__dirname, "blog.html"),
            },
            output: {
                manualChunks: function (id) {
                    if (!id.includes("node_modules")) {
                        return undefined;
                    }
                    if (id.includes("framer-motion")) {
                        return "framer-motion";
                    }
                    if (id.includes("react")) {
                        return "react-vendor";
                    }
                    return "vendor";
                },
            },
        },
    },
});
