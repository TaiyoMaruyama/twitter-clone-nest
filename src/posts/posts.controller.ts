import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostDto } from './dto/post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async createPost(@Body() postDto: PostDto) {
    try {
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return postDto;
  }

  @Get(':id')
  async findPost(@Param('id') id: string) {
    return this.postsService.findPost(id);
  }
}
