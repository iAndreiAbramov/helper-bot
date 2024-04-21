import { Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { TelegramService } from '@src/module/telegram/telegram.service';

@Controller('/tg')
export class TelegramController {
  constructor(private readonly tgService: TelegramService) {
  }

  @Post('/send')
  @HttpCode(HttpStatus.OK)
  async sendMessage() {
    return this.tgService.sendMessage('Hi from bot');
  }
}
