import { Injectable } from '@nestjs/common';
import { Customer, CreateCustomer, UpdateCustomer } from './customers.dto';
import { randomUUID } from 'crypto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: randomUUID().toString(),
      name: 'Customer 1',
      lastName: 'last name 1',
      phone: '+573156666666',
    },
  ];

  getAll(): Customer[] {
    return this.customers;
  }

  getById(id: string): Customer {
    const customer = this.customers.find((item) => item.id === id);
    if (!customer) {
      throw new NotFoundException(`Categorie ${id} not found`);
    }

    return customer;
  }

  create(payload: CreateCustomer): Customer {
    const newId = randomUUID().toString();
    this.customers.push({ id: newId, ...payload });
    return this.getById(newId);
  }

  update(id: string, payload: UpdateCustomer): Customer {
    const index = this.customers.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Category ${id} not found`);
    }
    this.customers[index] = { ...this.customers[index], ...payload };

    return this.getById(id);
  }

  delete(id: string): { isDeleted: boolean; message: string } {
    const index = this.customers.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Category ${id} not found`);
    }
    this.customers.splice(index, 1);
    return {
      isDeleted: true,
      message: `Category ${id} was deleted succesfully`,
    };
  }
}
