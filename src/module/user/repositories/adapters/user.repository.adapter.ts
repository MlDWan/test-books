import { Injectable } from '@nestjs/common';
import { SignUpDto } from 'src/module/auth/dtos/signUp.dto';

@Injectable()
export abstract class UserRepositoryAdapter {
  abstract createUser(createUserInput: SignUpDto): void;
}
