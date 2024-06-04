import { Controller, Get } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get()
  getEndPonit(): string {
    return 'your are in categories endponit';
  }
}
