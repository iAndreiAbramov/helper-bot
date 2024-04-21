import { Module } from '@nestjs/common';
import { RatesService } from '@src/module/rates/rates.service';

@Module({
  imports: [],
  controllers: [],
  providers: [RatesService],
})
export class RatesModule {
}
