import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BaseUrlByNetworkEnum } from '@src/module/rates/constants/base-url-by-network.enum.js';

@Injectable()
export class ZeroXService {
  private readonly apiKey: string;
  private readonly priceBaseUrl: string = BaseUrlByNetworkEnum.Bsc;

  constructor(private readonly configService: ConfigService) {
    this.apiKey = this.configService.get<string>('ZERO_X_API_KEY');
  }

  async getRates() {
    return 'Rates';
  }
}
