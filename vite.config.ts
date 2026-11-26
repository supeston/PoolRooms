import { defineConfig } from 'vite';

export default defineConfig({
  base: '/PoolRooms/',
  server: {
    port: 5173,
    open: false
  },
  build: {
    target: 'esnext'
  }
});
