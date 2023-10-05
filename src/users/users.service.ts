import { Injectable } from '@nestjs/common';
import { User } from './types/types';
import { v4 as uuid4 } from 'uuid';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
}
