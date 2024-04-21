import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ZeroXService {
   private readonly apiKey: string;
    constructor(private readonly configService: ConfigService) {
        this.apiKey = this.configService.get<string>('ZERO_X_API_KEY');
    }


    async getRates() {
        return 'Rates';
    }
}
