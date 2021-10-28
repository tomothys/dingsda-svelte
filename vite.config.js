/* eslint-env node */

import { builtinModules } from "module";
import { svelte } from "@sveltejs/vite-plugin-svelte";

const PACKAGE_ROOT = __dirname;

const config = {
    mode: process.env.MODE || "development",
    root: PACKAGE_ROOT,
    plugins: [svelte()],
    server: {
        host: "0.0.0.0",
        fs: {
            strict: true,
        },
    },
    build: {
        sourcemap: true,
        outDir: "dist",
        assetsDir: '.',
        rollupOptions: {
            external: [...builtinModules],
        },
        emptyOutDir: true,
    },
};

export default config;
