import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PlansService } from './plans.service';
import { WeeklyPlanDto } from './dto/weekly-plan.dto';

@Controller('plans')
export class PlansController {
  constructor(private readonly plansService: PlansService) {}
  @Get()
  getWorkoutPlan() {
    return this.plansService.getWorkoutPlan();
  }
  @Get(':id')
  getPlanById(@Param('id') id: string) {
    return this.plansService.getPlanById(Number(id));
  }

  @Post('weekly')
  updatePlanByUser(@Body() body: WeeklyPlanDto) {
    return this.plansService.updatePlan(body);
  }
}
