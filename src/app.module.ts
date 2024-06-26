import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './features/users/users.controller';
import { CategoriesController } from './features/categories/categories.controller';
import { ProductsController } from './features/products/products.controller';
import { OrdersController } from './features/orders/orders.controller';
import { BrandsController } from './features/brands/brands.controller';
import { CustomersController } from './features/customers/customers.controller';
import { ProductsService } from './features/products/products.service';
import { BrandsService } from './features/brands/brands.service';
import { CategoriesService } from './features/categories/categories.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    UsersController,
    CategoriesController,
    ProductsController,
    OrdersController,
    BrandsController,
    CustomersController,
  ],
  providers: [AppService, ProductsService, BrandsService, CategoriesService],
})
export class AppModule {}
