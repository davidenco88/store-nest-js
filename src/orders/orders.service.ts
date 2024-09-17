import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from './orders.entity';
import { UsersService } from 'src/users/users.service';
import { ProductsService } from 'src/products/products.service';
import { CreateOrder } from './orders.dto';

@Injectable()
export class OrdersService {
  constructor(
    private usersService: UsersService,
    private productsService: ProductsService,
  ) {}

  private orders: Order[] = [];

  getAll() {
    return this.orders;
  }

  getByUserId(userId: string): Order[] {
    const userOreders = this.orders.filter((order) => {
      return order.user.id === userId;
    });

    if (userOreders.length === 0) {
      throw new NotFoundException(
        `The user ${userId} does not have any orders`,
      );
    }

    return userOreders;
  }

  create(createOrder: CreateOrder) {
    const user = this.usersService.getById(createOrder.userId);
    const products = this.productsService.getAll();

    const newOrder = {
      date: new Date(),
      user,
      products,
    };

    return newOrder;
  }
}
