import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserRepositoryAdapter } from './adapters/user.repository.adapter';
import { UserModel } from '../models/user.model';
import { UserQueryRepositoryAdapter } from './adapters/user.query.repository.adapter';

@Injectable()
export class UserQueryRepository extends UserQueryRepositoryAdapter {
  constructor(
    @InjectModel(UserModel)
    private readonly userModel: typeof UserModel,
  ) {
    super();
  }

  async findUser(id: string): Promise<UserModel> | null {
    return this.userModel.findByPk(id);
  }

  async findUserByEmail(email: string): Promise<UserModel> | null {
    return this.userModel.findOne({ where: { email } });
  }
}
