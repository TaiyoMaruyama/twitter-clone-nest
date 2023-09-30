import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseUUIDPipe,
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
    try {
      return this.postsService.getAllPost();
    } catch (error) {
      throw new HttpException(
        {
          error: 'have error',
          status: HttpStatus.FORBIDDEN,
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }

  @Post()
  createPost(@Body() postDto: PostDto) {
    const id = uuid4;
    const post = {
      ...id,
      ...postDto,
    };
    return this.postsService.createPost(post);
  }

  @Patch(':id')
  updatePost(@Param('id', ParseUUIDPipe) id: string, @Body() postDto: PostDto) {
    const updatedPost = {
      id,
      ...postDto,
    };
    this.postsService.updatePost(id, updatedPost);
  }

  @Delete(':id')
  deletePost(@Param('id', ParseUUIDPipe) id: string) {
    return this.postsService.deletePost(id);
  }
}
