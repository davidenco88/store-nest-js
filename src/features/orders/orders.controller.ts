import { Controller, Get } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getEndPonit(): string {
    return 'your are in orders endponit';
  }
}
