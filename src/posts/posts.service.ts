import { Injectable } from '@nestjs/common';
import { Post } from './types';
import { v4 as uuid4 } from 'uuid';

@Injectable()
export class PostsService {
  private posts: Post[] = [
    {
      id: uuid4(),
      userId: uuid4(),
      postedAt: new Date('2021-12-24'),
      text: 'これは初めから入っている投稿です。',
      reply: uuid4(),
      rePost: uuid4(),
      good: uuid4(),
      analytics: 123,
    },
  ];

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
