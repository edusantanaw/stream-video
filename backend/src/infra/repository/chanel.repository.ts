import { Injectable } from '@nestjs/common';

@Injectable()
export class ChanelRepository {
  create() {
    console.log('create');
  }
}
