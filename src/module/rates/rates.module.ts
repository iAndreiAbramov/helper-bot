import { Module } from '@nestjs/common';
import { RatesService } from '@src/module/rates/rates.service';
import { ZeroXService } from '@src/module/rates/zero-x.service.js';

@Module({
  imports: [],
  controllers: [],
  providers: [RatesService, ZeroXService],
})
export class RatesModule {
}
