import { Injectable } from '@nestjs/common';
import { Prisma, WorkoutPlan } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { WeeklyPlanDto } from './dto/weekly-plan.dto';
import { UpdatePlanDTO } from './dto/update-plan-dto';

@Injectable()
export class PlansService {
  constructor(private prisma: PrismaService) {}

  async getWorkoutPlan() {
    return this.prisma.workoutPlan.findMany();
  }

  async getPlanByUserId(userId: number) {
    return this.prisma.workoutPlan.findMany({
      where: {
        userId: userId,
      },
    });
  }

  async createPlan(body: WeeklyPlanDto) {
    const { userId, plans } = body;
    const results: WorkoutPlan[] = [];

    for (const plan of plans) {
      const result = await this.prisma.workoutPlan.upsert({
        where: {
          userId_dayOfWeek: {
            userId,
            dayOfWeek: plan.dayOfWeek,
          },
        },
        update: {
          workoutName: plan.workoutName,
          isRestDay: plan.isRestDay,
        },
        create: {
          userId,
          dayOfWeek: plan.dayOfWeek,
          workoutName: plan.workoutName,
          isRestDay: plan.isRestDay,
        },
      });
      results.push(result);
    }
    return results;
  }

  async updatePlan(planId: number, body: UpdatePlanDTO) {
    return this.prisma.workoutPlan.update({
      where: { id: planId },
      data: body,
    });
  }
}
