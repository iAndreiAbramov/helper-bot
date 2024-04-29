export interface ITokenInfo {
  high?: number;
  low?: number;
  mode?: 'bear' | 'flat' | 'bull';
  symbol?: string;
  isTracking?: boolean;
}
