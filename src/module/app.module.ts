import { Module } from '@nestjs/common';
import { TelegramModule } from '@src/module/telegram/telegram.module';
import { AppConfigModule } from '@src/module/app-config/app-config.module';
import { RatesModule } from '@src/module/rates/rates.module';
import { FirebaseModule } from '@src/module/firebase/firebase.module';

@Module({
  imports: [TelegramModule, AppConfigModule, RatesModule, FirebaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {
}
