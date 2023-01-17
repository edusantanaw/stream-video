import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ChanelService } from './chanel.service';
import { CreateChanelDto } from './dto/create-chanel.dto';
import { UpdateChanelDto } from './dto/update-chanel.dto';

@Controller('chanel')
export class ChanelController {
  constructor(private readonly chanelService: ChanelService) {}

  @Post()
  create(@Body() createChanelDto: CreateChanelDto) {
    return this.chanelService.create(createChanelDto);
  }

  @Get()
  findAll() {
    return this.chanelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chanelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChanelDto: UpdateChanelDto) {
    return this.chanelService.update(+id, updateChanelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chanelService.remove(+id);
  }
}
