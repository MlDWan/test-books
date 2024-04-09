import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { BookService } from './book.service';
import { AuthGuard } from '@nestjs/passport';
import { CheckJwtToken } from 'src/decorators/auth.decorator';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { CreateInputBookDto } from './dtos/createInput.dto';
import { UpdateInputBookDto } from './dtos/updateInpun.dto';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async getAllBooks() {
    return this.bookService.getAllBooks();
  }

  @Get(':id')
  async getBook(@Param('id') id: string) {
    return this.bookService.getBook(id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async updateBook(
    @Param('id') id: string,
    @Body() updateBookDto: UpdateInputBookDto,
    @Req() req: Request,
  ) {
    const userId = req['user'].id;

    return this.bookService.changeBook(id, updateBookDto, userId);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createBook(@Body() createBookDto: CreateInputBookDto) {
    return this.bookService.createBook(createBookDto);
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  async removeBook(@Query('id') id: string, @Req() req: Request) {
    const userId = req['user'].id;

    return this.bookService.removeBook(id, userId);
  }
}
