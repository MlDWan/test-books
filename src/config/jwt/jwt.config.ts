import { JwtModule } from '@nestjs/jwt';

export const jwtConfig = JwtModule.register({
  global: true,
  secret: process.env.JWT_SECRET,
  signOptions: { expiresIn: '300s' },
});
