import { WorkRoutine } from './types';

export const hasRoutineConfigured = (routine: WorkRoutine) =>
  Object.values(routine.days).some((day) => day.enabled && day.start && day.end);
