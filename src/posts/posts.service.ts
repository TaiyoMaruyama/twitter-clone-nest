import { Injectable } from '@nestjs/common';
import { Post } from './types';

@Injectable()
export class PostsService {
  private posts = [];

  getAllPost(): Post[] {
    return this.posts;
  }
}
