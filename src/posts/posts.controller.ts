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
import { PostDto } from './dto/post.dto';
import { v4 as uuid4 } from 'uuid';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  fixedNumberPost(
    @Body('readStartIndex') readStartIndex: number,
    @Body('readStartIndex') readLength: number,
  ) {
    try {
      return this.postsService.fixedNumberPost(readStartIndex, readLength);
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

  @Delete(':id')
  deletePost(@Param('id', ParseUUIDPipe) id: string) {
    return this.postsService.deletePost(id);
  }
}
