import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const justin = await prisma.user.upsert({
    where: { email: 'test@gmail.com' },
    update: {},
    create: {
      email: 'test@gmail.com',
      name: 'Justin',
      workoutPlans: {
        create: [
          {
            dayOfWeek: 'Monday',
            workoutName: 'Upper 1',
            isRestDay: false,
          },
          {
            dayOfWeek: 'Tuesday',
            workoutName: 'Lower 1',
            isRestDay: false,
          },
          {
            dayOfWeek: 'Wednesday',
            workoutName: 'Rest',
            isRestDay: true,
          },
          {
            dayOfWeek: 'Thursday',
            workoutName: 'Upper 2',
            isRestDay: false,
          },
          {
            dayOfWeek: 'Friday',
            workoutName: 'Lower 2',
            isRestDay: false,
          },
          {
            dayOfWeek: 'Saturday',
            workoutName: 'Rest',
            isRestDay: true,
          },
          {
            dayOfWeek: 'Sunday',
            workoutName: 'Rest',
            isRestDay: true,
          },
        ],
      },
    },
  });
  console.log(justin);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
