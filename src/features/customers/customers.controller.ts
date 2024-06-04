import { Controller, Get } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  getEndPonit(): string {
    return 'your are in customer endponit';
  }
}
