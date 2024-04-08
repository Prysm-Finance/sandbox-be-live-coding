import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blog.module';
import { User } from './blog/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import {BlogPost} from './blog/blog-post.entity'
import {SeederService} from './seeder.service'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sql',
      synchronize: true,
      entities: [User,BlogPost],
    }),
    BlogModule,
  ],
  controllers: [],
  providers: [SeederService],
})
export class AppModule {}
