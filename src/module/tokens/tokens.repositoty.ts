import { HttpException, Injectable } from '@nestjs/common';
import { IFirebaseConfig } from '@src/shared/types/config/firebase-config.interface';
import { ConfigService } from '@nestjs/config';
import { App, applicationDefault, initializeApp } from 'firebase-admin/app';
import { Firestore, getFirestore } from 'firebase-admin/firestore';
import { HttpStatusCode } from 'axios';
import { TokenSymbol } from '@src/shared/types/crypto/token-symbol.enum';
import { ITokenInfo } from '@src/shared/types/crypto/token.interface';

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

  public async getTokenInfo(tokenSymbol: TokenSymbol): Promise<ITokenInfo> {
    const tokensRef = this.db.collection('tokens');
    const doc = tokensRef.doc(tokenSymbol);
    return await doc.get().then((doc) => {
      if (doc.exists) {
        return doc.data() as ITokenInfo;
      } else {
        throw new HttpException('No such document!', HttpStatusCode.NotFound);
      }
    });
  }
}
