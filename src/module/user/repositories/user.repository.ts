import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserRepositoryAdapter } from './adapters/user.repository.adapter';
import { UserModel } from '../models/user.model';

@Injectable()
export class UserRepository extends UserRepositoryAdapter {
  constructor(
    @InjectModel(UserModel)
    private readonly userModel: typeof UserModel,
  ) {
    super();
  }

  async createUser(createUserInput): Promise<void> {
    await this.userModel.create({ ...createUserInput });
  }
}
