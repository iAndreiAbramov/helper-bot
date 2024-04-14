import { Module } from '@nestjs/common';
import { TgModule } from '@src/module/tg/tg.module';
import { AppConfigModule } from '@src/module/app-config/app-config.module';

@Module({
  imports: [TgModule, AppConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {
}
