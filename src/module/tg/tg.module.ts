import { Module } from '@nestjs/common';
import { TgService } from '@src/module/tg/tg.service';
import { TgController } from '@src/module/tg/tg.controller';

@Module({
  imports: [],
  controllers: [TgController],
  providers: [TgService],
})
export class TgModule {
}
