export interface IAppConfig {
  port?: number;
  mode?: 'dev' | 'prod';
  tgId?: string;
  chatId?: string;
  zeroXApiKey?: string;
}
