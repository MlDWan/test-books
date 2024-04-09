import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BookModel } from '../models/book.models';
import { BookRepositoryAdapter } from './adapters/book.repository.adapter';

@Injectable()
export class BookRepository extends BookRepositoryAdapter {
  constructor(
    @InjectModel(BookModel)
    private readonly bookModel: typeof BookModel,
  ) {
    super();
  }

  async createBook(createBookInput: any): Promise<void> {
    const newBook = await this.bookModel.create({ ...createBookInput });
    await newBook.save();
  }

  async updateBook(id: string, bookData: any): Promise<void> {
    await this.bookModel.update(bookData, {
      where: {
        id,
      },
    });
  }
}
