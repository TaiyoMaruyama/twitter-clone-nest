import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [PostsModule, UsersModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
