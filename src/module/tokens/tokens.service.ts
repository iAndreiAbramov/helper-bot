import { Injectable } from '@nestjs/common';
import { TokensRepository } from '@src/module/tokens/tokens.repositoty';
import { TokenSymbol } from '@src/shared/types/crypto/token-symbol.enum';

@Injectable()
export class TokensService {
  constructor(
    private readonly tokensRepository: TokensRepository,
  ) {
  }

  public async getTokenInfo(tokenSymbol: TokenSymbol) {
    return this.tokensRepository.getTokenInfo(tokenSymbol);
  }
}
