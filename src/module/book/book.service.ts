import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BookRepository } from './repositories/book.repository';
import { BookQueryRepository } from './repositories/book.query.repository';
import { BookModel } from './models/book.models';

@Injectable()
export class BookService {
  constructor(
    private readonly bookRepository: BookRepository,
    private readonly bookqueryRepository: BookQueryRepository,
  ) {}

  async createBook(createBookInfo: any): Promise<void> {
    return this.bookRepository.createBook(createBookInfo);
  }

  async getAllBooks(): Promise<BookModel[]> {
    return this.bookqueryRepository.findAllBooks();
  }

  async getBook(bookId: string): Promise<BookModel> {
    return this.bookqueryRepository.findBook(bookId);
  }

  async changeBook(
    bookId: string,
    updateData: any,
    userId: string,
  ): Promise<void> {
    const book = await this.bookqueryRepository.findBookByOwnerId(
      bookId,
      userId,
    );

    if (!book) throw new HttpException('Book not found', HttpStatus.NOT_FOUND);

    return this.bookRepository.updateBook(bookId, updateData);
  }

  async removeBook(bookId: string, userId: string): Promise<void> {
    const book = await this.bookqueryRepository.findBookByOwnerId(
      bookId,
      userId,
    );

    if (!book) throw new HttpException('Book not found', HttpStatus.NOT_FOUND);

    return this.bookqueryRepository.removeBook(bookId);
  }
}
