import { Controller, Get, Post } from '@nestjs/common'

@Controller('blog-post')
export class BlogController {

  @Post()
  async createPost() {}

  @Get()
  async getPosts() {}
}
