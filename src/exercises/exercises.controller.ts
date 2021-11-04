import {
  Controller,
  Get,
  HttpException,
  Body,
  Post,
  Param,
} from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise-dto';
import { Exercise } from './exercises.schema';
import { ExercisesService } from './exercises.service';

@Controller('exercises')
export class ExerciseController {
  constructor(private readonly exercisesService: ExercisesService) {}

  @Get('hello')
  getHello(): string {
    return this.exercisesService.getHello();
  }

  @Get(':id')
  async getExercise(@Param() params): Promise<Exercise | Error> {
    try {
      return await this.exercisesService.getExerciseById(params.id);
    } catch (error) {
      throw new HttpException(error.message, 404);
    }
  }
  @Post()
  async createExercises(
    @Body() params: CreateExerciseDto,
  ): Promise<CreateExerciseDto | Error> {
    try {
      return await this.exercisesService.create(params);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
