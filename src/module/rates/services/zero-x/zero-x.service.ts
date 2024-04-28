import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { getZeroXRoute } from '@src/module/rates/utils/get-zero-x-route.util';
import { TokenAddressBsc } from '@src/module/rates/constants/token/token-address-bsc';
import { firstValueFrom } from 'rxjs';
import { parseEther } from 'viem';
import { ZeroXRateResponse } from '@src/module/rates/services/zero-x/types/zero-x-rate-response.interface';
import { TelegramService } from '@src/module/telegram/telegram.service';
import { DEFAULT_SELL_AMOUNT } from '@src/module/rates/services/zero-x/constants/sell-amount';

@Injectable()
export class ZeroXService {
  constructor(
    private readonly httpService: HttpService,
    private readonly telegramService: TelegramService,
  ) {
  }

  async getBtcmtToUsdtRate() {
    const { data } = await firstValueFrom(
      this.httpService.get<ZeroXRateResponse>(
        getZeroXRoute.Price({
          sellToken: TokenAddressBsc.Btcmt,
          buyToken: TokenAddressBsc.Usdt,
          sellAmount: parseEther(DEFAULT_SELL_AMOUNT).toString(),
        })),
    );

    return this.telegramService.sendMessage(`BTCMT to USDT rate: ${data.grossPrice}`);
  }
}
