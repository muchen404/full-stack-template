import { defineConfig } from 'vite';
import { join } from 'path';

const fileDirToPath = (dir) => join(__dirname, dir);

export default defineConfig(() => {
  return {
    publicDir: fileDirToPath('client/public'),
    build: {
      manifest: true,
      rollupOptions: {
        input: fileDirToPath('client/index.html')
      }
    }
  };
});
