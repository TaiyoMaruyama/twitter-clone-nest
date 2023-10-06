import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostDto } from './dto/post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll() {
    return this.postsService.findAll();
  }

  @Post()
  async createPost(@Body() postDto: PostDto) {
    try {
      const createdPost = await this.postsService.createPost(postDto);
      return createdPost;
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  @Get(':id')
  async findPost(@Param('id') id: string) {
    return this.postsService.findPost(id);
  }

  @Put(':id')
  async updatePost(@Param('id') id: string, @Body('text') text: string) {
    return this.postsService.updatePost({ id, text });
  }
}
