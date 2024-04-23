import { Controller, Get } from '@nestjs/common';
import { TokensService } from '@src/module/firebase/tokens.service';

@Controller('tokens')
export class TokensController {
  constructor(
    private readonly tokensService: TokensService,
  ) {
  }

  @Get()
  public async getTokens() {
    return this.tokensService.getTokens();
  }
}
