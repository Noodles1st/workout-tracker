export interface WeeklyPlanDto {
  userId: number;
  plans: {
    dayOfWeek: string;
    workoutName: string;
    isRestDay: boolean;
  }[];
}
