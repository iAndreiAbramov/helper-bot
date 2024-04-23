import { Controller, Get, Query } from '@nestjs/common';
import { TokensService } from '@src/module/firebase/tokens.service';
import { TokenSymbol } from '@src/shared/types/crypto/token-symbol.enum';

@Controller('tokens')
export class TokensController {
  constructor(
    private readonly tokensService: TokensService,
  ) {
  }

  @Get()
  public async getTokenInfo(@Query('symbol') tokenSymbol: TokenSymbol) {
    return this.tokensService.getTokenInfo(tokenSymbol);
  }
}
