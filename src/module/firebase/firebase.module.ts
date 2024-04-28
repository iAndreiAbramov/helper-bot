import { Module } from '@nestjs/common';
import { FirebaseConfigModule } from '@src/module/firebase-config/firebase-config.module';
import { TokensService } from '@src/module/firebase/tokens.service';
import { TokensRepository } from '@src/module/firebase/tokens.repositoty';
import { TokensController } from '@src/module/firebase/tokens.controller';

@Module({
  imports: [FirebaseConfigModule],
  controllers: [TokensController],
  providers: [TokensService, TokensRepository],
  exports: [TokensRepository],
})
export class FirebaseModule {
}
