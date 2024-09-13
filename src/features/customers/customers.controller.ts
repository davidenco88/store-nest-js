import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { Customer, CreateCustomer, UpdateCustomer } from './customers.dto';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get()
  getAll(): Customer[] {
    return this.customersService.getAll();
  }

  @Get(':id')
  getById(@Param('id') customerId: string): Customer {
    return this.customersService.getById(customerId);
  }

  @Post()
  created(@Body() payload: CreateCustomer): Customer {
    return this.customersService.create(payload);
  }

  @Put(':id')
  update(@Param('id') customerId: string, @Body() payload: UpdateCustomer) {
    return this.customersService.update(customerId, payload);
  }

  @Delete(':id')
  delete(@Param('id') customerId: string) {
    return this.customersService.delete(customerId);
  }
}
