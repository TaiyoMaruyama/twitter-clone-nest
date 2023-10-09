import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostDto } from './dto/post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  // 全ての投稿を取得する
  @Get()
  async findAll() {
    return this.postsService.findAll();
  }

  // 新しい投稿をする
  @Post()
  async createPost(@Body() postDto: PostDto) {
    return await this.postsService.createPost(postDto);
  }

  // 特定の投稿を取得する
  @Get(':id')
  async findPost(@Param('id') id: string) {
    return this.postsService.findPost(id);
  }

  // 任意の投稿におけるテキストを編集する
  @Put(':id')
  async updatePost(@Param('id') id: string, @Body('text') text: string) {
    return this.postsService.updatePost({ id, text });
  }
}
