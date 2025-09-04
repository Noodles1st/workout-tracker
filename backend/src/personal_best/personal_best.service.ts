import { Injectable } from '@nestjs/common';
import { CreatePersonalBestDto } from './dto/create-personal-best-dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PersonalBestService {
    constructor(private prisma: PrismaService) {}
 async upsertPersonalBest(body: CreatePersonalBestDto){
    return this.prisma.personalBest.upsert({
        where: { userId_exerciseId: {
            userId: body.userId,
            exerciseId: body.exerciseId
        },},
        create: {
            userId: body.userId,
            exerciseId: body.exerciseId,
            weight: body.weight,
            date: body.date
        },
        update: {weight: body.weight, date: new Date() }
    })
 }
}
