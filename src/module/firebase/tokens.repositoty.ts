import { Injectable } from '@nestjs/common';
import { IFirebaseConfig } from '@src/shared/types/config/firebase-config.interface';
import { ConfigService } from '@nestjs/config';
import { initializeApp, App, applicationDefault } from 'firebase-admin/app';
import { getFirestore, Firestore } from 'firebase-admin/firestore';

@Injectable()
export class TokensRepository {
  private readonly firebaseConfig: unknown;
  private readonly firebaseApp: App;
  private readonly db: Firestore;

  constructor(
    private readonly configService: ConfigService,
  ) {
    this.firebaseConfig = {
      ...this.configService.getOrThrow<Required<IFirebaseConfig>>('firebase'),
      credential: applicationDefault(),
    };
    this.firebaseApp = initializeApp(this.firebaseConfig);
    this.db = getFirestore(this.firebaseApp);
  }

  public async getTokenData() {
    return await this.db.collection('tokens').get();
  }
}
