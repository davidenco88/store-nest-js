import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrder } from './orders.dto';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get()
  getAll() {
    return this.ordersService.getAll();
  }

  @Get('user/:userId')
  getByUserId(@Param() userId: string) {
    return this.ordersService.getByUserId(userId);
  }

  @Post()
  create(@Body() createOrder: CreateOrder) {
    return this.ordersService.create(createOrder);
  }
}
