import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserModel } from './models/user.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserQueryRepository } from './repositories/user.query.repository';
import { UserRepository } from './repositories/user.repository';
import { UserQueryRepositoryAdapter } from './repositories/adapters/user.query.repository.adapter';
import { UserRepositoryAdapter } from './repositories/adapters/user.repository.adapter';

@Module({
  imports: [SequelizeModule.forFeature([UserModel])],
  controllers: [],
  providers: [
    UserService,
    UserRepository,
    UserQueryRepository,
    {
      provide: UserRepositoryAdapter,
      useClass: UserRepository,
    },
    {
      provide: UserQueryRepositoryAdapter,
      useClass: UserQueryRepository,
    },
  ],
  exports: [UserService],
})
export class UserModule {}
