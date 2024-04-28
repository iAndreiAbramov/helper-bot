import { Injectable } from '@nestjs/common';
import { ZeroXService } from '@src/module/rates/services/zero-x/zero-x.service';

@Injectable()
export class RatesService {
  constructor(private readonly zeroXService: ZeroXService) {
  }

  public async getBtcmtRate() {
    return this.zeroXService.getBtcmtToUsdtRate();
  }
}
