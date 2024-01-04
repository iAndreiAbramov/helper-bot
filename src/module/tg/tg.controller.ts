import { Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { TgService } from '@src/module/tg/tg.service';

@Controller('/tg')
export class TgController {
  constructor(private readonly tgService: TgService) {
  }

  @Post('/send')
  @HttpCode(HttpStatus.OK)
  async sendMessage() {
    return this.tgService.sentMessage();
  }
}
