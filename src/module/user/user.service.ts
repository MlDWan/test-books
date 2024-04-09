import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepositoryAdapter } from './repositories/adapters/user.repository.adapter';
import * as bcrypt from 'bcrypt';
import { UserQueryRepositoryAdapter } from './repositories/adapters/user.query.repository.adapter';
import { SignUpDto } from '../auth/dtos/signUp.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepositoryAdapter: UserRepositoryAdapter,
    private readonly userQueryRepositoryAdapter: UserQueryRepositoryAdapter,
  ) {}

  public async createUser(createUserData: SignUpDto) {
    const { email, name, password } = createUserData;

    const user = await this.findUserByEmail(email);

    if (user)
      throw new HttpException(
        'Пользователь зарегистрирован',
        HttpStatus.BAD_REQUEST,
      );

    const saltOrRounds = 10;
    const hashPass = await bcrypt.hash(password, saltOrRounds);

    return this.userRepositoryAdapter.createUser({
      email,
      name,
      password: hashPass,
    });
  }

  public async findUserById(userId: string) {
    return await this.userQueryRepositoryAdapter.findUser(userId);
  }

  public async findUserByEmail(email: string) {
    return this.userQueryRepositoryAdapter.findUserByEmail(email);
  }
}
