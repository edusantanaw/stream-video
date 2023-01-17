import { Module } from '@nestjs/common';
import { ChanelService } from './chanel.service';
import { ChanelController } from './chanel.controller';
import { Chanel, ChanelSchema } from 'src/infra/schemas/chanel.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Chanel.name, schema: ChanelSchema }]),
  ],
  controllers: [ChanelController],
  providers: [ChanelService],
})
export class ChanelModule {}
