import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  return app;
}

// 如果是生产模式，直接监听端口
if (import.meta.env.PROD) {
  bootstrap().then((app) => {
    app.listen(3000);
  });
}

export const viteNodeApp = bootstrap();
