import { defineConfig } from 'vite';
import { join } from 'path';
import vue from '@vitejs/plugin-vue';
import { VitePluginNode } from 'vite-plugin-node';

const fileDirToPath = (dir) => join(__dirname, dir);

export default defineConfig(() => {
  return {
    envDir: fileDirToPath('client/config'),
    plugins: [
      vue(),
      ...VitePluginNode({
        async adapter({ app, req, res, next }) {
          // 如果url是包含api，则交给nest处理，否则由vite处理
          if (req.url.indexOf('api') > -1) {
            await app.init();
            const instance = app.getHttpAdapter().getInstance();
            instance(req, res);
          } else {
            next();
          }
        },
        appPath: './server/main.ts',
        exportName: 'viteNodeApp',
        tsCompiler: 'swc',
        swcOptions: {}
      })
    ],
    publicDir: fileDirToPath('client/public'),
    build: {
      manifest: true,
      rollupOptions: {
        input: fileDirToPath('client/index.html')
      }
    },

    optimizeDeps: {
      exclude: [
        '@nestjs/microservices',
        '@nestjs/websockets',
        'cache-manager',
        'class-transformer',
        'class-validator',
        'fastify-swagger'
      ]
    }
  };
});
