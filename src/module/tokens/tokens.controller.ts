import { Controller, Get, Query } from '@nestjs/common';
import { TokensService } from '@src/module/tokens/tokens.service';
import { TokenInfoQuery } from '@src/module/tokens/query/token-info.query';

@Controller('tokens')
export class TokensController {
  constructor(
    private readonly tokensService: TokensService,
  ) {
  }

  @Get()
  public async getTokenInfo(@Query() query: TokenInfoQuery) {
    return this.tokensService.getTokenInfo(query.symbol);
  }
}
