import { Injectable } from '@nestjs/common';
import { TRACKING_INTERVAL_SECONDS_FALLBACK } from '@src/module/tracking/ constants/tracking-interval';
import { ZeroXService } from '@src/module/rates/services/zero-x/zero-x.service';
import { TelegramService } from '@src/module/telegram/telegram.service';
import { ITokenTrackingConfig } from '@src/shared/types/crypto/token-tracking-config.interface';
import { TokenSymbol } from '@src/shared/types/crypto/token-symbol.enum';
import { isInInterval } from '@src/shared/utils/common/is-in-interval';
import { checkIsTimeElapsed } from '@src/shared/utils/time/check-is-time-elapsed';
import { NOTIFICATION_INTERVAL_MINUTES_FALLBACK } from '@src/module/tracking/ constants/notification-interval';
import { TokensService } from '@src/module/tokens/tokens.service';
import { MILLISECONDS_IN_SECOND } from '@src/shared/constants/time/milliseconds-in-second';

@Injectable()
export class TrackingService {
  private interval: ReturnType<typeof setInterval>;
  private tokenInfo: ITokenTrackingConfig;
  private tokenPrice: string;
  private notificationTimestampMs: number;

  constructor(
    private readonly tokensService: TokensService,
    private readonly zeroXService: ZeroXService,
    private readonly telegramService: TelegramService,
  ) {
  }

  private async processTokenPrice(): Promise<number> {
    this.tokenInfo = await this.tokensService.getTokenInfo(TokenSymbol.Btcmt);
    this.tokenPrice = await this.zeroXService.getBtcmtToUsdtRate();
    const lowerPrice = this.tokenInfo?.lowerPrice ?? 0;
    const upperPrice = this.tokenInfo?.upperPrice ?? 0;
    const innerOffset = this.tokenInfo.intervalInnerOffset ?? 0;
    const outerOffset = this.tokenInfo.intervalOuterOffset ?? 0;
    const trackingIntervalSeconds = this.tokenInfo.trackingIntervalSeconds ?? TRACKING_INTERVAL_SECONDS_FALLBACK;
    const notificationIntervalMinutes = this.tokenInfo.notificationIntervalMinutes ?? NOTIFICATION_INTERVAL_MINUTES_FALLBACK;

    const isTimeToNotify = checkIsTimeElapsed({
      lastTimeMs: this.notificationTimestampMs,
      elapseIntervalMinutes: notificationIntervalMinutes,
    });

    if (isTimeToNotify && isInInterval({
      value: Number(this.tokenPrice),
      min: lowerPrice - outerOffset,
      max: lowerPrice + innerOffset,
    })) {
      await this.telegramService.sendMessage(`BTCMT lower price reached: ${this.tokenPrice}`);
      this.notificationTimestampMs = Date.now();
    }

    if (isTimeToNotify && isInInterval({
      value: Number(this.tokenPrice),
      min: upperPrice - innerOffset,
      max: upperPrice + outerOffset,
    })) {
      await this.telegramService.sendMessage(`BTCMT upper price reached: ${this.tokenPrice}`);
      this.notificationTimestampMs = Date.now();
    }

    return trackingIntervalSeconds;
  }

  public async start(): Promise<void> {
    const trackingIntervalMinutes = await this.processTokenPrice();
    this.interval = setInterval(() => this.processTokenPrice(), trackingIntervalMinutes * MILLISECONDS_IN_SECOND);
  }

  public async stop(): Promise<void> {
    clearInterval(this.interval);
  }
}
