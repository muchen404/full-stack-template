import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createServer as createViteServer } from 'vite';

const setupConfig = {
  clientPort: 1337,
  serverPort: 1338
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const vite = await createViteServer();

  await app.listen(setupConfig.serverPort);

  await vite.listen(setupConfig.clientPort);
}
bootstrap();
