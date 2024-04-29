import { Module } from '@nestjs/common';
import { TrackingModule } from '@src/module/tracking/tracking.module';

@Module({
  imports: [
    TrackingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
