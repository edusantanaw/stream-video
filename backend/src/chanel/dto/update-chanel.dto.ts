import { PartialType } from '@nestjs/mapped-types';
import { CreateChanelDto } from './create-chanel.dto';

export class UpdateChanelDto extends PartialType(CreateChanelDto) {}
