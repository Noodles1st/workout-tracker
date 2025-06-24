import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getAllUsers() {
    return this.userService.users();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.user({ id: Number(id) });
  }
}
