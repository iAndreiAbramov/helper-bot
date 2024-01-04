import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';
import { Logger } from '@nestjs/common';

// TODO: move to config service
const mode = 'dev';
const port = 3100;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: '*',
      exposedHeaders: '*',
    },
  });
  app.setGlobalPrefix('v1');
  await app.listen(port);

  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
  Logger.log(`✌️  Application is running in ${mode} mode`);
}

void bootstrap();
