import { Controller, Post } from '@nestjs/common';
import { TrackingService } from '@src/module/tracking/tracking.service';

@Controller('tracking')
export class TrackingController {
  constructor(private readonly trackingService: TrackingService) {
  }

  @Post('start')
  public async start(): Promise<void> {
    return await this.trackingService.start();
  }

  @Post('stop')
  public async stop(): Promise<void> {
    return await this.trackingService.stop();
  }
}
