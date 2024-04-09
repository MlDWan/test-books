import {
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateInputBookDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsString()
  @IsNotEmpty()
  year_publishing: string;

  @IsString()
  @IsNotEmpty()
  shotr_name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  userId: string;
}

