import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: '*',
      exposedHeaders: '*',
    },
  });
  app.setGlobalPrefix('v1');
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const appConfig = app.get(ConfigService);
  const port = appConfig.getOrThrow('app.port');
  const mode = appConfig.getOrThrow('app.mode');

  await app.listen(port);

  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
  Logger.log(`✌️  Application is running in ${mode} mode`);
}

void bootstrap();
