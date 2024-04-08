import { Module } from '@nestjs/common';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogPost } from './blog-post.entity'

@Module({
  imports: [TypeOrmModule.forFeature([User, BlogPost])],
  providers: [],
  controllers: [],
})
export class BlogModule {}
