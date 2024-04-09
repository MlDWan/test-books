import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { BookModel } from './models/book.models';
import { SequelizeModule } from '@nestjs/sequelize';
import { BookQueryRepositoryAdapter } from './repositories/adapters/book.query.repository.adapter';
import { BookRepositoryAdapter } from './repositories/adapters/book.repository.adapter';
import { BookQueryRepository } from './repositories/book.query.repository';
import { BookRepository } from './repositories/book.repository';

@Module({
  imports: [SequelizeModule.forFeature([BookModel])],
  controllers: [BookController],
  providers: [
    BookService,
    BookRepository,
    BookQueryRepository,
    {
      provide: BookRepositoryAdapter,
      useClass: BookRepository,
    },
    {
      provide: BookQueryRepositoryAdapter,
      useClass: BookQueryRepository,
    },
  ],
})
export class BookModule {}
