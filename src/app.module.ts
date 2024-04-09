import { Module } from '@nestjs/common';
import { databaseProviders } from './config/database/db.config';
import { UserModule } from './module/user/user.module';
import { AuthModule } from './module/auth/auth.module';
import { BookModule } from './module/book/book.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    databaseProviders,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    AuthModule,
    BookModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
