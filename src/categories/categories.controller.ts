import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { Category, CreateCategory, UpdateCategory } from './categories.dto';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  getAll(): Category[] {
    return this.categoriesService.getAll();
  }

  @Get(':id')
  getById(@Param('id') categoryId: string): Category {
    return this.categoriesService.getById(categoryId);
  }

  @Post()
  created(@Body() payload: CreateCategory): Category {
    return this.categoriesService.create(payload);
  }

  @Put(':id')
  update(@Param('id') categoryId: string, @Body() payload: UpdateCategory) {
    return this.categoriesService.update(categoryId, payload);
  }

  @Delete(':id')
  delete(@Param('id') categoryId: string) {
    return this.categoriesService.delete(categoryId);
  }
}
