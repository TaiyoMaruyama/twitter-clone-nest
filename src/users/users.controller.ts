import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/users.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAllUser() {
    return this.usersService.getAllUser();
  }

  @Post()
  postUser(@Body() userDto: UserDto) {
    return this.usersService.postUser(userDto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}
