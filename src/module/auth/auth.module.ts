import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { jwtConfig } from 'src/config/jwt/jwt.config';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports: [UserModule, jwtConfig],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
