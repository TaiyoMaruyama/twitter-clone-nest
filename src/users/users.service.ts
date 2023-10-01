import { Injectable } from '@nestjs/common';
import { User } from './types/types';
import { v4 as uuid4 } from 'uuid';

@Injectable()
export class UsersService {
  private users = [
    {
      id: uuid4(),
      name: 'testName1',
      email: 'test@gmail.com',
      password: 'password',
    },
    {
      id: uuid4(),
      name: 'testName2',
      email: 'test-test@gmail.com',
      password: 'password',
    },
    {
      id: uuid4(),
      name: 'testName3',
      email: 'test-for-test@gmail.com',
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
