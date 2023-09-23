import { Injectable } from '@nestjs/common';
import { Post } from './types';

@Injectable()
export class PostsService {
  private posts = [];

  getAllPost(): Post[] {
    return this.posts;
  }

  createPost(post: Post): Post[] {
    this.posts.push(post);
    return this.posts;
  }

  updatePost(id: string, newPost: Post): Post[] {
    const index = this.posts.findIndex((post) => post.id === id);
    this.posts.splice(index, 1, newPost);
    return this.posts;
  }

  deletePost(id: string): void {
    this.posts = this.posts.filter((user) => user.id !== id);
  }
}
