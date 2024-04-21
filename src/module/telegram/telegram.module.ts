import { Module } from '@nestjs/common';
import { TelegramService } from '@src/module/telegram/telegram.service';
import { TelegramController } from '@src/module/telegram/telegram.controller';

@Module({
  imports: [],
  controllers: [TelegramController],
  providers: [TelegramService],
  exports: [TelegramService],
})
export class TelegramModule {
}
