import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blog.module';
import { User } from './blog/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sql',
      synchronize: true,
      entities: [User],
    }),
    BlogModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
