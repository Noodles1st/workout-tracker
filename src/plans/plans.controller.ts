import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PlansService } from './plans.service';
import { WeeklyPlanDto } from './dto/weekly-plan.dto';
import { UpdatePlanDTO } from './dto/update-plan-dto';

@Controller('plans')
export class PlansController {
  constructor(private readonly plansService: PlansService) {}
  @Get()
  getWorkoutPlan() {
    return this.plansService.getWorkoutPlan();
  }

  @Post('weekly')
  createPlanByUser(@Body() body: WeeklyPlanDto) {
    return this.plansService.createPlan(body);
  }

  @Patch(':id')
  updatePlan(@Param('id') planId: string, @Body() body: UpdatePlanDTO) {
    return this.plansService.updatePlan(Number(planId), body);
  }

  @Delete(':id')
  deletePlan(@Param('id') planId: string) {
    return this.plansService.deletePlan(Number(planId))
  }
}
