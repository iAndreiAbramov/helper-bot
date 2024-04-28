import { TokenSymbol } from '@src/shared/types/crypto/token-symbol.enum';
import { IsEnum } from 'class-validator';

export class TokenInfoQuery {
  @IsEnum(TokenSymbol)
  symbol: TokenSymbol;
}
