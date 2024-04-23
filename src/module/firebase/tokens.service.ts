import { Injectable } from '@nestjs/common';
import { TokensRepository } from '@src/module/firebase/tokens.repositoty';

@Injectable()
export class TokensService {
  constructor(
    private readonly tokensRepository: TokensRepository,
  ) {
  }

  public async getTokens() {
    return this.tokensRepository.getTokenData();
  }
}
