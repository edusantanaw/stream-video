import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ChanelDocument = HydratedDocument<Chanel>;

@Schema()
export class Chanel {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;
}

export const ChanelSchema = SchemaFactory.createForClass(Chanel);
