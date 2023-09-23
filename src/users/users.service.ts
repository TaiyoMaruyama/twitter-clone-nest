import { Injectable } from '@nestjs/common';
import { User } from './types';

@Injectable()
export class UsersService {
  private users = [];

  getAllUser(): User[] {
    return this.users;
  }

  postUser(user: User) {
    return this.users.push(user);
  }

  deleteUser(id: string): void {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
