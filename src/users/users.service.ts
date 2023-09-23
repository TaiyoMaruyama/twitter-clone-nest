import { Injectable } from '@nestjs/common';
import { Users } from './types';

@Injectable()
export class UsersService {
  private users = [];

  getAllUser(): Users[] {
    return this.users;
  }
}
