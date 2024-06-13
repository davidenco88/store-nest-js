import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { Product, ProductUpdated } from './products.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAll() {
    return this.productsService.getAll();
  }

  @Get(':id')
  getById(@Param('id') productId: string) {
    return this.productsService.getById(productId);
  }

  @Post()
  create(@Body() payload: Product) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') productId: string, @Body() payload: ProductUpdated) {
    return this.productsService.update(productId, payload);
  }

  @Delete(':id')
  delete(@Param('id') productId: string) {
    return this.productsService.deleteById(productId);
  }
}
