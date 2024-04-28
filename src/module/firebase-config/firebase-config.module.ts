import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import firebaseConfig from '@src/config/firebase/firebase-config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [firebaseConfig],
    }),
  ],
})
export class FirebaseConfigModule {
}
