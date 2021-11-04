import { Injectable } from '@nestjs/common';

@Injectable()
export class ExercisesService {
  getHello(): string {
    return 'Hello World!';
  }
}
