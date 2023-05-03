import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post as PostSchema } from './entities/post.entity';
import { Model } from 'mongoose';

@Injectable()
export class PostsService {
  constructor(@InjectModel('Post') private readonly postModel: Model<PostSchema>) {}

  async findAll(): Promise<PostSchema[]> {
    return await this.postModel.find().exec();
  }

  async findOne(id: string): Promise<PostSchema> {
    return await this.postModel.findById(id).exec();
  }

  async create(post: PostSchema): Promise<PostSchema> {
    const newPost = new this.postModel(post);
    return await newPost.save();
  }

  async update(id: string, post: PostSchema): Promise<PostSchema>{
    return await this.postModel.findByIdAndUpdate(id, post, {new: true});
  }

  async delete(id: string): Promise<PostSchema>{
    return await this.postModel.findByIdAndDelete(id);
  }
}