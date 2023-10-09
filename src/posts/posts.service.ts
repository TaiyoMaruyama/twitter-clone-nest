import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PostDto } from './dto/post.dto';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.post.findMany({});
  }

  /**
   * 新しい投稿を作成
   * 投稿に失敗した場合はエラーメッセージをthrowする
   * @param data
   * @returns
   */
  async createPost(data: PostDto) {
    try {
      return await this.prisma.post.create({
        data,
      });
    } catch (error) {
      throw new HttpException('failed to create post.', HttpStatus.BAD_REQUEST);
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
