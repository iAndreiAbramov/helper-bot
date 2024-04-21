import { Module } from '@nestjs/common';
import { RatesService } from '@src/module/rates/services/rates.service';
import { ZeroXService } from '@src/module/rates/services/zero-x.service';
import { HttpModule } from '@nestjs/axios';
import { AppConfigModule } from '@src/module/app-config/app-config.module';
import { ConfigService } from '@nestjs/config';
import { RatesController } from '@src/module/rates/rates.controller';

@Module({
  imports: [AppConfigModule, HttpModule.registerAsync({
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => ({
      // baseURL: BaseUrlByNetworkEnum.Bsc,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        '0x-api-key': configService.getOrThrow('app.zeroXApiKey'),
      },
    }),
  })],
  controllers: [RatesController],
  providers: [RatesService, ZeroXService],
})
export class RatesModule {
}
