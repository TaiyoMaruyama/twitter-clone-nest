import { Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.post.findMany({});
  }

  async createPost(data) {
    try {
      return await this.prisma.post.create({
        data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async findPost(params: string) {
    const id = params;
    return this.prisma.post.findUnique({
      where: {
        id: id,
      },
    });
  }

  async updatePost(param: { id: string; text: string }) {
    const { id, text } = param;
    return this.prisma.post.update({
      where: {
        id: id,
      },
      data: {
        text: text,
      },
    });
  }
}
