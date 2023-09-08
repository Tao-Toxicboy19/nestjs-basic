import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schemas';
import { CreateBookDto } from './dto/create-book.dto';
import { updateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BookController {
    constructor(private bookService: BookService) { }

    @Get()
    async getAllBooks(): Promise<Book[]> {
        return this.bookService.findAll();
    }

    @Get(':id')
    async getBooks(@Param('id') id: string): Promise<Book> {
        return this.bookService.findById(id);
    }

    @Post()
    async createBook(@Body() book: CreateBookDto): Promise<Book> {
        return this.bookService.create(book)
    }

    @Put(':id')
    async updateBook(@Param('id') id: string, @Body() book: updateBookDto): Promise<Book> {
        return this.bookService.updateById(id, book)
    }

    @Delete(':id')
    async daleteBook(@Param('id') id: string): Promise<Book> {
        return this.bookService.deleteById(id);
    }
}
