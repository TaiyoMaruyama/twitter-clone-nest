import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  // eslint-disable-next-line no-unused-vars
  constructor(private usersService: UsersService) {}

  @Get()
  getAllUser() {
    return this.usersService.getAllUser();
  }

  @Post()
  postUser(
    @Body('id') id: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const a = {
      id,
      email,
      password,
    };
    return this.usersService.postUser(a);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    this.usersService.deleteUser(id);
  }
}
