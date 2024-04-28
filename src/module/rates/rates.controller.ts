import { Controller, Get } from '@nestjs/common';
import { ZeroXService } from '@src/module/rates/services/zero-x/zero-x.service';

@Controller('rates')
export class RatesController {
  constructor(private readonly zeroXService: ZeroXService) {
  }

  @Get('btcmt')
  getBtcmtToUsdtRate() {
    return this.zeroXService.getBtcmtToUsdtRate();
  }
}
