import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export type ExerciseDocument = Exercise & Document;

@Schema()
export class Exercise {
  @Prop()
  name: string;

  @Prop()
  video: string;

  @Prop()
  notes: string;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' }])
  subs: Exercise[];

  @Prop([String])
  equipment: string[];
}

export const ExerciseSchema = SchemaFactory.createForClass(Exercise);
