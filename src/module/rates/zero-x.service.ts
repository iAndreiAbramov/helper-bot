import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BaseUrlByNetworkEnum } from '@src/module/rates/constants/url/base-url-by-network.enum.js';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ZeroXService {
  private readonly apiKey: string;
  private readonly priceBaseUrl: string = BaseUrlByNetworkEnum.Bsc;

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {
    this.apiKey = this.configService.get<string>('ZERO_X_API_KEY');
  }

  async getBtcmtToUsdtRate(): Promise<string> {
    return Promise.resolve('BTCMT to USDT rate');
  }
}
