import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SharedModule } from 'src/shared/shared.module';
import { ExerciseController } from './exercises.controller';
import { ExerciseSchema, Exercise } from './exercises.schema';
import { ExercisesService } from './exercises.service';

@Module({
  imports: [
    SharedModule,
    MongooseModule.forFeature([
      { name: Exercise.name, schema: ExerciseSchema },
    ]),
  ],
  controllers: [ExerciseController],
  providers: [ExercisesService],
})
export class ExercisesModule {}
