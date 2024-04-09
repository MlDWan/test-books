import { Injectable } from '@nestjs/common';
import { BookModel } from '../../models/book.models';

@Injectable()
export abstract class BookRepositoryAdapter {
  abstract createBook(createBookInput: any): Promise<void>;

  abstract updateBook(bookId: string, bookData: any): Promise<void>;
}
