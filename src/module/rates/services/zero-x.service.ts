import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { getZeroXRoute } from '@src/module/rates/utils/get-zero-x-route.util';
import { TokenAddressBscEnum } from '@src/module/rates/constants/token/token-address-bsc.enum';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class ZeroXService {
  constructor(
    private readonly httpService: HttpService,
  ) {
  }

  async getBtcmtToUsdtRate() {
    const { data } = await firstValueFrom(this.httpService.get(getZeroXRoute.Price({
        sellToken: TokenAddressBscEnum.Usdt,
        buyToken: TokenAddressBscEnum.Btcmt,
        sellAmount: '10',
      })).pipe(
        catchError((error: AxiosError) => {
          console.log(error.message);
          throw error;
        }),
      ),
    );

    return data;
  }
}
