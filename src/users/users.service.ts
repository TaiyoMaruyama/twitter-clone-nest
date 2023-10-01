import { Injectable } from '@nestjs/common';
import { User } from './types/types';
import { v4 as uuid4 } from 'uuid';

@Injectable()
export class UsersService {
  private users: User[] = [
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

  /**
   * emailを入力して該当するuserがあればそのidを返却する
   * @param email string
   * @returns
   */
  getUser(email: string): string {
    const responseUserId = this.users.find((user) => user.email === email).id;
    return responseUserId;
  }

  createUser(user: User) {
    return this.users.push(user);
  }

  deleteUser(id: string): void {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
