import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';
import * as process from 'process';
import { AppMode } from '@src/config/types/app-mode.enum';
import { IAppConfig } from '@src/config/types/app-config.interface';

export default registerAs('app', (): IAppConfig => {
  const config: IAppConfig = {
    port: parseInt(process.env.APP_PORT),
    mode: process.env.APP_MODE as AppMode,
  };

  const schema = Joi.object<IAppConfig, false, IAppConfig>({
    port: Joi.number().port().required(),
    mode: Joi.string().valid(AppMode.Dev, AppMode.Prod).default(AppMode.Dev),
  });

  const { error } = schema.validate(config);

  if (error) {
    throw new Error(`[app-config]: ${error.message}`);
  }

  return config;
});
