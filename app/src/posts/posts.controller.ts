import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostSchema } from './entities/post.entity';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll(): Promise<PostSchema[]>{
    return await this.postsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PostSchema>{
    return await this.postsService.findOne(id);
  }

  @Post()
  async create(@Body() post: PostSchema): Promise<PostSchema>{
    return await this.postsService.create(post);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() post: PostSchema): Promise<PostSchema> {
    return await this.postsService.update(id, post);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<PostSchema>{
    return await this.postsService.delete(id);
  }
}
