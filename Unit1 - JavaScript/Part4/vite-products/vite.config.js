import { resolve } from "path";
import { defineConfig } from "vite";
export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, "index.html"),
                "add-product": resolve(__dirname, "add-product.html"),
            },
        },
    },
});
