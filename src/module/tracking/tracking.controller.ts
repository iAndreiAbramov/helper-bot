import { Controller, HttpCode, Post } from '@nestjs/common';
import { TrackingService } from '@src/module/tracking/tracking.service';
import { HttpStatusCode } from 'axios';

@Controller('tracking')
export class TrackingController {
  constructor(private readonly trackingService: TrackingService) {
  }

  @Post('start')
  @HttpCode(HttpStatusCode.Ok)
  public async start(): Promise<void> {
    return await this.trackingService.start();
  }

  @Post('stop')
  @HttpCode(HttpStatusCode.Ok)
  public async stop(): Promise<void> {
    return await this.trackingService.stop();
  }
}
