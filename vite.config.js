import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  base: '/the-andrew-times-games/',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
});
