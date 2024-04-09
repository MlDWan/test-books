import { IsOptional, IsString } from 'class-validator';

export class UpdateInputBookDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  author: string;

  @IsString()
  @IsOptional()
  year_publishing: string;

  @IsString()
  @IsOptional()
  shotr_name: string;

  @IsString()
  @IsOptional()
  description: string;
}
