import { resolve } from 'path';
import { globSync } from 'glob';
import { defineConfig } from 'vite';

const htmlFiles = globSync('**/index.html', {
    ignore: ['node_modules/**', 'dist/**'],
});

const input = Object.fromEntries(
    htmlFiles.map((file) => [file.replace(/\/?index\.html$/, '') || 'main', resolve(import.meta.dirname, file)])
);

export default defineConfig({
    build: {
        rollupOptions: {
            input,
        },
    },
});
