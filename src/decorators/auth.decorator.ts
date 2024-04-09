import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

export const CheckJwtToken = createParamDecorator(
  async (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    if (!request.headers.authorization) {
      return null;
    }

    const token = request.headers.authorization.replace('Bearer ', '');

    try {
      const jwtService = new JwtService();
      const decodedToken = jwtService.verify(token);
      if (!decodedToken) throw UnauthorizedException;
      request.decodedToken = decodedToken;

      return decodedToken;
    } catch (error) {
      return null;
    }
  },
);
