import { Injectable } from '@nestjs/common';
import { TRACKING_INTERVAL } from '@src/module/tracking/ constants/tracking-interval';
import { ZeroXService } from '@src/module/rates/services/zero-x/zero-x.service';
import { TelegramService } from '@src/module/telegram/telegram.service';
import { ITokenInfo } from '@src/shared/types/crypto/token.interface';
import { TokenSymbol } from '@src/shared/types/crypto/token-symbol.enum';
import { isInInterval } from '@src/shared/utils/common/is-in-interval';
import { checkIsTimeElapsed } from '@src/shared/utils/time/check-is-time-elapsed';
import { NOTIFICATION_INTERVAL_MINUTES } from '@src/module/tracking/ constants/notification-interval';
import { TokensService } from '@src/module/tokens/tokens.service';

@Injectable()
export class TrackingService {
  private interval: ReturnType<typeof setInterval>;
  private tokenInfo: ITokenInfo;
  private tokenPrice: string;
  private notificationTimestampMs: number;

  constructor(
    private readonly tokensService: TokensService,
    private readonly zeroXService: ZeroXService,
    private readonly telegramService: TelegramService,
  ) {
  }

  private async processTokenPrice(): Promise<void> {
    this.tokenInfo = await this.tokensService.getTokenInfo(TokenSymbol.Btcmt);
    this.tokenPrice = await this.zeroXService.getBtcmtToUsdtRate();
    const lowerPrice = this.tokenInfo?.low ?? 0;
    const upperPrice = this.tokenInfo?.high ?? 0;

    const isTimeToNotify = checkIsTimeElapsed({
      lastTimeMs: this.notificationTimestampMs,
      elapseIntervalMinutes: NOTIFICATION_INTERVAL_MINUTES,
    });

    if (isTimeToNotify && isInInterval({
      value: Number(this.tokenPrice),
      min: lowerPrice - 0.1,
      max: lowerPrice + 0.01,
    })) {
      await this.telegramService.sendMessage(`BTCMT lower price reached: ${this.tokenPrice}`);
      this.notificationTimestampMs = Date.now();
    }

    if (isTimeToNotify && isInInterval({
      value: Number(this.tokenPrice),
      min: upperPrice - 0.01,
      max: upperPrice + 0.1,
    })) {
      await this.telegramService.sendMessage(`BTCMT upper price reached: ${this.tokenPrice}`);
      this.notificationTimestampMs = Date.now();
    }
  }

  public async start(): Promise<void> {
    this.interval = setInterval(this.processTokenPrice, TRACKING_INTERVAL);
  }

  public async stop(): Promise<void> {
    clearInterval(this.interval);
  }
}
