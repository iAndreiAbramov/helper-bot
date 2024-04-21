import { Controller, Get } from '@nestjs/common';
import { RatesService } from '@src/module/rates/services/rates/rates.service';

@Controller('rates')
export class RatesController {
  constructor(private readonly ratesService: RatesService) {
  }

  @Get('btcmt')
  getBtcmtToUsdtRate() {
    return this.ratesService.getBtcmtRate();
  }
}
