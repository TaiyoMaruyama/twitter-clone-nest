import { Injectable } from '@nestjs/common';
import { Post } from './types/types';
import { v4 as uuid4 } from 'uuid';

@Injectable()
export class PostsService {
  private posts: Post[] = [
    {
      id: uuid4(),
      userId: uuid4(),
      postedAt: new Date('2021-12-24'),
      text: 'これは初めから入っている投稿です。',
      analytics: 123,
    },
    {
      id: uuid4(),
      userId: uuid4(),
      postedAt: new Date('2021-12-24'),
      text: '初めからの投稿です。雨が降ってきました。',
      analytics: 123,
    },
  ];

  /**
   * 一定数の投稿を取得する
   * 投稿取得数・何番目を取得するかはフロント側で指示してパラメータで渡す
   * @param readStartIndex number
   * @param readLength number
   * @returns
   */
  fixedNumberPost(readStartIndex: number, readLength: number): Post[] {
    const readPosts = this.posts.slice(
      readStartIndex,
      readStartIndex + readLength,
    );
    return readPosts;
  }

  createPost(post: Post): Post[] {
    this.posts.push(post);
    return this.posts;
  }

  deletePost(id: string): void {
    this.posts = this.posts.filter((user) => user.id !== id);
  }
}
