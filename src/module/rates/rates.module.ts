import { Module } from '@nestjs/common';
import { ZeroXService } from '@src/module/rates/services/zero-x/zero-x.service';
import { HttpModule } from '@nestjs/axios';
import { AppConfigModule } from '@src/module/app-config/app-config.module';
import { ConfigService } from '@nestjs/config';
import { RatesController } from '@src/module/rates/rates.controller';
import { BaseUrlByNetworkEnum } from '@src/module/rates/constants/url/base-url-by-network.enum';
import { TelegramModule } from '@src/module/telegram/telegram.module';

@Module({
  imports: [AppConfigModule, TelegramModule, HttpModule.registerAsync({
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => ({
      baseURL: BaseUrlByNetworkEnum.Bsc,
      headers: {
        'Content-Type': 'application/json',
        '0x-api-key': configService.getOrThrow('app.zeroXApiKey'),
      },
    }),
  })],
  controllers: [RatesController],
  providers: [ZeroXService],
})
export class RatesModule {
}
