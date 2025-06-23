import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from './user.service';
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  findMany() {
    return this.userService.findAll();
  }
}
