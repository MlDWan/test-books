import { Injectable } from '@nestjs/common';
import { UserModel } from '../../models/user.model';

@Injectable()
export abstract class UserQueryRepositoryAdapter {
  abstract findUser(id: string): Promise<UserModel> | null;

  abstract findUserByEmail(email: string): Promise<UserModel> | null;
}
