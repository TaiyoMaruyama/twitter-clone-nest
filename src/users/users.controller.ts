import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/users.dto';
import { ZodCustomPipe } from './pipes/zodCustom.pipe';
import { userScheme } from './scheme/userScheme';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @UsePipes(new ZodCustomPipe(userScheme))
  async createUser(@Body() userDto: UserDto) {
    return userDto;
  }
}
