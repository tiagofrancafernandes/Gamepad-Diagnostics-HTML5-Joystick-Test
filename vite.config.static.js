import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(import.meta.dirname, 'index.html'),
                standalone: resolve(import.meta.dirname, 'standalone/index.html'),
                minigames: resolve(import.meta.dirname, 'minigames/index.html'),
                asteroid: resolve(import.meta.dirname, 'minigames/asteroid/index.html'),
                cyberTank: resolve(import.meta.dirname, 'minigames/cyber-tank/index.html'),
                retroSnake: resolve(import.meta.dirname, 'minigames/retro-snake/index.html'),
                retroSpaceImpact: resolve(import.meta.dirname, 'minigames/retro-space-impact/index.html'),
                retroStackAttack: resolve(import.meta.dirname, 'minigames/retro-stack-attack/index.html'),
                retroStackAttackV3: resolve(import.meta.dirname, 'minigames/retro-stack-attack/v3/index.html'),
            },
        },
    },
});
