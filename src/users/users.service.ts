import { Injectable } from '@nestjs/common';
import { User } from './types';
import { v4 as uuid4 } from 'uuid';

@Injectable()
export class UsersService {
  private users = [
    {
      id: uuid4,
      email: 'test@gmail.com',
      password: 'password',
    },
  ];

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
