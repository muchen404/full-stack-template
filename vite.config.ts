import { defineConfig } from 'vite';
import { join } from 'path';
import vue from '@vitejs/plugin-vue';

const fileDirToPath = (dir) => join(__dirname, dir);

export default defineConfig(() => {
  return {
    base: 'https://foo.com/',
    envDir: fileDirToPath('client/config'),
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
