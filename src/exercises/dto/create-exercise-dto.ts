import { Exercise } from '../exercises.schema';

class CreateExerciseDto {
  name: string;
  video: string;
  notes: string;
  subs: Exercise[];
  equipment: string[];
}

export { CreateExerciseDto };
