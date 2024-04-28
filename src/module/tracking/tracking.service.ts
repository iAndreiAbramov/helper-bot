import { Injectable } from '@nestjs/common';
import { TRACKING_INTERVAL } from '@src/module/tracking/ constants/tracking-interval';

@Injectable()
export class TrackingService {
  private interval: ReturnType<typeof setInterval>;

  public async start(): Promise<void> {
    this.interval = setInterval(() => {
      console.log('Tracking...');
    }, TRACKING_INTERVAL);
  }

  public async stop(): Promise<void> {
    clearInterval(this.interval);
  }
}
