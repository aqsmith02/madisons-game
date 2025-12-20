import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  base: '/madisons-game/',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
});
