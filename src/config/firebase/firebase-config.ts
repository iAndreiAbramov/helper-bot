import { registerAs } from '@nestjs/config';
import { IFirebaseConfig } from '@src/shared/types/config/firebase-config.interface';
import * as Joi from 'joi';

export default registerAs('firebase', (): IFirebaseConfig => {
  const config: IFirebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
  };

  const schema = Joi.object<IFirebaseConfig, false, IFirebaseConfig>({
    apiKey: Joi.string().required(),
    authDomain: Joi.string().required(),
    projectId: Joi.string().required(),
    storageBucket: Joi.string().required(),
    messagingSenderId: Joi.string().required(),
    appId: Joi.string().required(),
  });

  const { error } = schema.validate(config);

  if (error) {
    throw new Error(`[firebase-config]: ${error.message}`);
  }

  return config;
});


