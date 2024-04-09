import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { SignUpDto } from './dtos/signUp.dto';
import { SignInDto } from './dtos/signIn.dto';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async signIn(loginData: SignInDto) {
    const { email, password } = loginData;
    const user = await this.userService.findUserByEmail(email);

    await bcrypt.compare(password, user.password).then((result) => {
      if (!result)
        throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    });

    const payload = { sub: user.id, username: user.email };

    const access_token = await this.jwtService.signAsync(payload);
    const refresh_token = await this.jwtService.signAsync(payload);

    return { access_token, refresh_token };
  }

  async signUp(registrationData: SignUpDto) {
    await this.userService.createUser(registrationData);
  }
}
