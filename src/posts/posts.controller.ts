import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostDto } from './post.dto';
import { v4 as uuid4 } from 'uuid';

@Controller('posts')
export class PostsController {
  // eslint-disable-next-line no-unused-vars
  constructor(private postsService: PostsService) {}

  @Get()
  getAllPost() {
    return this.postsService.getAllPost();
  }

  @Post()
  createPost(@Body() postDto: PostDto) {
    const id = uuid4;
    const post = {
      ...id,
      postDto,
    };
    return this.postsService.createPost(post);
  }

  @Patch(':id')
  updatePost(@Param('id') id: string, @Body() postDto: PostDto) {
    const updatedPost = {
      id,
      ...postDto,
    };
    this.postsService.updatePost(id, updatedPost);
  }

  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return this.postsService.deletePost(id);
  }
}