/* eslint-env node */

import { builtinModules } from "module";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { join } from "path";

const PACKAGE_ROOT = __dirname;

const config = {
    mode: process.env.MODE || "development",
    root: PACKAGE_ROOT,
    plugins: [
        svelte({
            experimental: {
                useVitePreprocess: true,
            },
        }),
    ],
    server: {
        host: true,
        cors: true,
        fs: {
            strict: true,
        },
    },
    build: {
        sourcemap: true,
        outDir: "dist",
        assetsDir: ".",
        rollupOptions: {
            external: [...builtinModules],
        },
        emptyOutDir: true,
        lib: {
            entry: join(__dirname, "src/lib.ts"),
            name: "DingsdaSvelte",
            fileName: (format) => `dingsda-svelte.${format}.js`,
            formats: ["es", "umd", "cjs"],
        },
        minify: false,
    },
};

export default config;
