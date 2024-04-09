import { Injectable } from '@nestjs/common';
import { BookModel } from '../../models/book.models';

@Injectable()
export abstract class BookQueryRepositoryAdapter {
  abstract findBook(id: string): Promise<BookModel> | null;

  abstract findBookByOwnerId(
    id: string,
    userId: string,
  ): Promise<BookModel> | null;

  abstract findAllBooks(): Promise<BookModel[]> | [];

  abstract removeBook(bookId: string): Promise<void>;
}
