import { Module } from '@nestjs/common';
import { TelegramModule } from '@src/module/telegram/telegram.module';
import { TokensModule } from '@src/module/tokens/tokens.module';
import { RatesModule } from '@src/module/rates/rates.module';
import { TrackingController } from '@src/module/tracking/tracking.controller';
import { TrackingService } from '@src/module/tracking/tracking.service';

@Module({
  imports: [TelegramModule, TokensModule, RatesModule],
  controllers: [TrackingController],
  providers: [TrackingService],
})

export class TrackingModule {
}
