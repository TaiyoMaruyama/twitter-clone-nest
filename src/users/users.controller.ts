import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  // eslint-disable-next-line no-unused-vars
  constructor(private usersService: UsersService) {}

  @Get()
  getAllUser() {
    return this.usersService.getAllUser();
  }
}
