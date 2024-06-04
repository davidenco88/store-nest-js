import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getEndPonit(): string {
    return 'your are in products endponit';
  }
}
