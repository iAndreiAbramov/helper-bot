import { TokenSymbol } from '@src/shared/types/crypto/token-symbol.enum';

export interface ITokenTrackingConfig {
  upperPrice?: number;
  lowerPrice?: number;
  marketMode?: 'bear' | 'flat' | 'bull';
  symbol?: TokenSymbol;
  isTracking?: boolean;
  intervalInnerOffset?: number;
  intervalOuterOffset?: number;
  trackingIntervalSeconds?: number;
  notificationIntervalMinutes?: number;
}
