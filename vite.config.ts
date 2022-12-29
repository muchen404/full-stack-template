import { defineConfig } from 'vite';
import { join } from 'path';
import vue from '@vitejs/plugin-vue';

const fileDirToPath = (dir) => join(__dirname, dir);

export default defineConfig(() => {
  return {
    plugins: [vue()],
    publicDir: fileDirToPath('client/public'),
    build: {
      manifest: true,
      rollupOptions: {
        input: fileDirToPath('client/index.html')
      }
    }
  };
});
