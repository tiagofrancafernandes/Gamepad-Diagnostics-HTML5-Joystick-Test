import { readdirSync } from 'node:fs';
import { relative, resolve } from 'node:path';
import { defineConfig } from 'vite';

function findHtmlInputs (dir) {
    const entries = readdirSync(dir, { recursive: true, withFileTypes: true });
    const inputs = {};

    for (const entry of entries) {
        if (!entry.isFile() || entry.name !== 'index.html') {
            continue;
        }

        const fullPath = resolve(entry.parentPath || entry.path, entry.name);
        const relPath = relative(dir, fullPath);

        if (relPath.startsWith('node_modules') || relPath.startsWith('dist')) {
            continue;
        }

        const key = relPath.replace(/\/?index\.html$/, '') || 'main';
        inputs[key] = fullPath;
    }

    return inputs;
}

export default defineConfig({
    build: {
        rollupOptions: {
            input: findHtmlInputs(import.meta.dirname),
        },
    },
});
