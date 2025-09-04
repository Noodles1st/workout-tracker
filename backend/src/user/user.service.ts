import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async users() {
    return this.prisma.user.findMany();
  }
  async user(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async getPlanByUserId(userId: number) {
    return this.prisma.workoutPlan.findMany({
      where: {
        userId: userId,
      },
    });
  }
}
