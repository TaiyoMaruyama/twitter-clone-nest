import { Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async createPost(data: Post): Promise<Post> {
    try {
      return this.prisma.post.create({
        data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async findPost(params: string) {
    const id = params;
    console.log(id);
    return this.prisma.post.findUnique({
      where: {
        id: id,
      },
    });
  }
}
