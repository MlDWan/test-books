import { UUID } from 'crypto';
import {
  Table,
  Column,
  Model,
  DataType,
  IsUUID,
  IsEmail,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { UserModel } from 'src/module/user/models/user.model';

@Table({ tableName: 'book' })
export class BookModel extends Model {
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
  author: string;

  @Column({ type: DataType.STRING, allowNull: false })
  year_publishing: string;

  @Column({ type: DataType.STRING, allowNull: false })
  shotr_name: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  description: string;

  @BelongsTo(() => UserModel)
  owner: UserModel;
  @ForeignKey(() => UserModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  userId: string;
}
