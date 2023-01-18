import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChanelModule } from './chanel/chanel.module';
import { VideoModule } from './video/video.module';

@Module({
  imports: [
    ChanelModule,
    MongooseModule.forRoot('mongodb://localhost/my_tube'),
    VideoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
