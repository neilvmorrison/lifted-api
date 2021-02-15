export interface ToDoParams {
  text: string;
  checked: boolean;
}

export interface CycleParams {
  name: string;
  initialBW?: number;
  endBW?: number;
  weeks: number;
  completed: boolean;
  userId: string; // sort key
}

export interface WorkoutParams {
  name: string;
  notes: string;
  completed: boolean;
  cycleId: string;
}

export interface ExerciseParams {
  workoutId: string; // sort key
  sets: number;
}

export interface SetParams {
  movementId: string; // sort key
  reps: number;
  weight: number;
  completed: boolean;
}

export interface MovementParams {
  name: string;
  imageUri: string;
  description: string;
}
