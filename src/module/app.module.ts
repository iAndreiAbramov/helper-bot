import { Module } from '@nestjs/common';
import { TgModule } from '@src/module/tg/tg.module';

@Module({
  imports: [TgModule],
  controllers: [],
  providers: [],
})
export class AppModule {
}
