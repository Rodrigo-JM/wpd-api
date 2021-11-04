import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateExerciseDto } from './dto/create-exercise-dto';
import { Exercise, ExerciseDocument } from './exercises.schema';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectModel(Exercise.name) private exerciseModel: Model<ExerciseDocument>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async create(createExerciseDto: CreateExerciseDto): Promise<Exercise> {
    const createdExercise = new this.exerciseModel(createExerciseDto);

    return createdExercise.save();
  }

  async getExerciseById(exerciseId: string): Promise<Exercise> {
    return this.exerciseModel.findById(exerciseId).populate('subs');
  }
}
