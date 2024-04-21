import { Module } from '@nestjs/common';
import { RatesService } from '@src/module/rates/rates.service';
import { ZeroXService } from '@src/module/rates/zero-x.service.js';
import { HttpModule } from '@nestjs/axios';
import { BaseUrlByNetworkEnum } from '@src/module/rates/constants/url/base-url-by-network.enum.js';
import { AppConfigModule } from '@src/module/app-config/app-config.module.js';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [AppConfigModule, HttpModule.registerAsync({
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => ({
      baseURL: BaseUrlByNetworkEnum.Bsc,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        '0x-api-key': configService.getOrThrow('zeroXApiKey'),
      },
    }),
  })],
  controllers: [],
  providers: [RatesService, ZeroXService],
})
export class RatesModule {
}
