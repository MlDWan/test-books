import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BookModel } from '../models/book.models';
import { BookQueryRepositoryAdapter } from './adapters/book.query.repository.adapter';
import { UserModel } from 'src/module/user/models/user.model';

@Injectable()
export class BookQueryRepository extends BookQueryRepositoryAdapter {
  constructor(
    @InjectModel(BookModel)
    private readonly bookModel: typeof BookModel,
  ) {
    super();
  }

  async findBook(id: string): Promise<BookModel> | null {
    return this.bookModel.findByPk(id, {
      include: { model: UserModel, attributes: ['id', 'name', 'email'] },
      attributes: [
        'id',
        'name',
        'author',
        'year_publishing',
        'shotr_name',
        'description',
      ],
    });
  }

  async findAllBooks(): Promise<BookModel[]> | null {
    return this.bookModel.findAll({
      include: { model: UserModel, attributes: ['id', 'name', 'email'] },
      attributes: [
        'id',
        'name',
        'author',
        'year_publishing',
        'shotr_name',
        'description',
      ],
    });
  }

  async removeBook(id: string): Promise<void> {
    this.bookModel.destroy({ where: { id } });
  }

  findBookByOwnerId(id: string, userId: string): Promise<BookModel> | null {
    return this.bookModel.findOne({ where: { id, userId } });
  }
}
