import { Injectable } from '@nestjs/common';
import { Telegraf } from 'telegraf';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TelegramService {
  private readonly chatId: string;
  private readonly telegraf: Telegraf;

  constructor(
    private readonly configService: ConfigService,
  ) {
    this.chatId = this.configService.get('app.chatId');
    this.telegraf = new Telegraf(this.configService.getOrThrow('app.tgId'));
  }

  public async sendMessage(message: string) {
    await this.telegraf.telegram.sendMessage(this.chatId, message);
  }
}
