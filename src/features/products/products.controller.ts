import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { Product, ProductUpdated } from './products.dto';

@Controller('products')
export class ProductsController {
  @Get()
  getOne() {
    return {
      message: 'Product sended',
    };
  }

  @Get()
  getAll() {
    return {
      message: 'Products sended',
    };
  }

  @Post()
  create(@Body() payload: Product) {
    return {
      message: 'Product created',
      product: payload,
    };
  }

  @Put()
  update(@Body() payload: ProductUpdated) {
    return {
      message: 'Product updated',
      product: payload,
    };
  }

  @Delete()
  delete(@Body() payload: ProductUpdated) {
    return {
      message: 'Product deleted',
      product: payload,
    };
  }
}
