import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Chanel, ChanelDocument } from 'src/infra/schemas/chanel.schema';
import { CreateChanelDto } from './dto/create-chanel.dto';
import { UpdateChanelDto } from './dto/update-chanel.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ChanelService {
  constructor(
    @InjectModel(Chanel.name) private chanelModel: Model<ChanelDocument>,
  ) {}

  async create(createChanelDto: CreateChanelDto) {
    const verifyEmail = await this.chanelModel.findOne({
      email: createChanelDto.email,
    });
    if (verifyEmail) throw 'Email already being used!';
    const chanel = new this.chanelModel(createChanelDto);
    await chanel.save();
    return chanel;
  }

  async findAll() {
    const chanels = await this.chanelModel.find();
    return chanels;
  }

  async findOne(id: number) {
    const chanel = await this.chanelModel.findById(id);
    return chanel;
  }

  async update(id: number, updateChanelDto: UpdateChanelDto) {
    const chanelExists = await this.chanelModel.findById(id);
    if (!chanelExists) throw 'Chanel not exists';
    if (chanelExists.email !== updateChanelDto.email) {
      const verifyEmail = await this.chanelModel.findOne({
        email: updateChanelDto.email,
      });
      if (verifyEmail) throw 'Email already being used!';
    }
    const updateChanel = new this.chanelModel({ id, ...updateChanelDto });
    updateChanel.save();
    return updateChanel;
  }

  async remove(id: number) {
    const chanelExists = await this.chanelModel.findById({ id });
    if (!chanelExists) throw 'Chanel not exists!';
    await this.chanelModel.findByIdAndRemove({ id });
    return null;
  }
}
