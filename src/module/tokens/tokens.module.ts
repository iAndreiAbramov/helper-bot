import { Module } from '@nestjs/common';
import { FirebaseConfigModule } from '@src/module/firebase-config/firebase-config.module';
import { TokensService } from '@src/module/tokens/tokens.service';
import { TokensRepository } from '@src/module/tokens/tokens.repositoty';
import { TokensController } from '@src/module/tokens/tokens.controller';

@Module({
  imports: [FirebaseConfigModule],
  controllers: [TokensController],
  providers: [TokensService, TokensRepository],
  exports: [TokensRepository, TokensService],
})
export class TokensModule {
}
