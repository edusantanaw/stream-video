import { Module } from '@nestjs/common';
import { ChanelService } from './chanel.service';
import { ChanelController } from './chanel.controller';

@Module({
  controllers: [ChanelController],
  providers: [ChanelService]
})
export class ChanelModule {}
