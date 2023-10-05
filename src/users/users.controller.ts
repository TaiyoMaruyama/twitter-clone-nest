import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/users.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async createUser(@Body() userDto: UserDto) {
    return userDto;
  }
}
