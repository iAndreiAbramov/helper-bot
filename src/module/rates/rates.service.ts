import { Injectable } from '@nestjs/common';

@Injectable()
export class RatesService {
  public async getRates() {
    return 'Rates';
  }
}
