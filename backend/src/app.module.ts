import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PlansModule } from './plans/plans.module';
import { SessionModule } from './session/session.module';
import { ExerciseModule } from './exercise/exercise.module';
import { BodyweightModule } from './bodyweight/bodyweight.module';
import { PersonalBestModule } from './personal_best/personal_best.module';

@Module({
  imports: [
    UserModule,
    PlansModule,
    SessionModule,
    ExerciseModule,
    BodyweightModule,
    PersonalBestModule,
  ],
})
export class AppModule {}
