import { Body, Controller, Put } from '@nestjs/common';
import { PersonalBestService } from './personal_best.service';
import { CreatePersonalBestDto } from './dto/create-personal-best-dto';

@Controller('personal-best')
export class PersonalBestController {
     constructor(private readonly personalBestService: PersonalBestService) {}

     @Put()
     upsertPersonalBest(@Body() body: CreatePersonalBestDto) {
        return this.personalBestService.upsertPersonalBest(body);
     }
}
