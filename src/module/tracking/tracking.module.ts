import { Module } from '@nestjs/common';
import { TelegramModule } from '@src/module/telegram/telegram.module';
import { FirebaseModule } from '@src/module/firebase/firebase.module';
import { RatesModule } from '@src/module/rates/rates.module';
import { TrackingController } from '@src/module/tracking/tracking.controller';
import { TrackingService } from '@src/module/tracking/tracking.service';

@Module({
  imports: [TelegramModule, FirebaseModule, RatesModule],
  controllers: [TrackingController],
  providers: [TrackingService],
})

export class TrackingModule {
}
