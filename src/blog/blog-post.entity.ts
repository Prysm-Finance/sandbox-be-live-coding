import { Entity, PrimaryColumn } from 'typeorm';

@Entity('blog_post')
export class BlogPost {
  @PrimaryColumn()
  id: number;
}
