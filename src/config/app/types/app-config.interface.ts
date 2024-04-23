export interface AppConfig {
  port?: number;
  mode?: 'dev' | 'prod';
  tgId?: string;
  chatId?: string;
  zeroXApiKey?: string;
}
