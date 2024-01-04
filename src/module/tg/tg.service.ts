import { Injectable } from '@nestjs/common';

@Injectable()
export class TgService {
  public async sentMessage() {
    return 'Send message';
  }
}
