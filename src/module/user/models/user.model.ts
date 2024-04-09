import {
  Table,
  Column,
  Model,
  DataType,
  IsUUID,
  IsEmail,
  BelongsToMany,
  HasMany,
} from 'sequelize-typescript';
import { BookModel } from 'src/module/book/models/book.models';

@Table({ tableName: 'user' })
export class UserModel extends Model {
  @IsUUID(4)
  @Column({
    type: DataType.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @HasMany(() => BookModel,{
    foreignKey: 'userId'
  })
  books: BookModel[];
}
