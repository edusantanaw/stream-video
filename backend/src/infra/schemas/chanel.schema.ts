import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ChanelDocument = HydratedDocument<Chanel>;

@Schema()
export class Chanel {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;
}

export const ChanelSchema = SchemaFactory.createForClass(Chanel);
