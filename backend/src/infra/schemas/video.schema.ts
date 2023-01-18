import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type VideoDocument = HydratedDocument<Video>;

@Schema()
export class Video {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  video: string;
}

export const VideoSchema = SchemaFactory.createForClass(Video);
