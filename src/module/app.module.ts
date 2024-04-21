import { Module } from '@nestjs/common';
import { TgModule } from '@src/module/tg/tg.module';
import { AppConfigModule } from '@src/module/app-config/app-config.module';
import { RatesModule } from '@src/module/rates/rates.module';

@Module({
  imports: [TgModule, AppConfigModule, RatesModule],
  controllers: [],
  providers: [],
})
export class AppModule {
}
