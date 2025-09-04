import { Module } from '@nestjs/common';
import { PersonalBestService } from './personal_best.service';
import { PersonalBestController } from './personal_best.controller';

@Module({
  providers: [PersonalBestService],
  controllers: [PersonalBestController]
})
export class PersonalBestModule {}
