import { Injectable } from '@nestjs/common';
import { CreateChanelDto } from './dto/create-chanel.dto';
import { UpdateChanelDto } from './dto/update-chanel.dto';

@Injectable()
export class ChanelService {
  create(createChanelDto: CreateChanelDto) {
    return 'This action adds a new chanel';
  }

  findAll() {
    return `This action returns all chanel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chanel`;
  }

  update(id: number, updateChanelDto: UpdateChanelDto) {
    return `This action updates a #${id} chanel`;
  }

  remove(id: number) {
    return `This action removes a #${id} chanel`;
  }
}
