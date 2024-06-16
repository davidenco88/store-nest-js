import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { BrandsService } from './brands.service';
import { Brand, BrandCreate, BrandUpdate } from './brands.dto';

@Controller('brands')
export class BrandsController {
  constructor(private brandservice: BrandsService) {}

  @Get()
  getAll(): Brand[] {
    return this.brandservice.getAll();
  }

  @Get(':id')
  getByID(@Param('id') brandId: string) {
    return this.brandservice.getById(brandId);
  }

  @Post()
  create(@Body() payload: BrandCreate) {
    return this.brandservice.create(payload);
  }

  @Put(':id')
  update(@Param('id') brandId: string, @Body() payload: BrandUpdate) {
    return this.brandservice.update(brandId, payload);
  }

  @Delete(':id')
  delete(@Param('id') brandId: string) {
    return this.brandservice.delete(brandId);
  }
}
