import { Injectable } from '@nestjs/common';
import { Product, ProductUpdated } from './products.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: randomUUID().toString(),
      name: 'product 1',
      description: 'This is the product 1',
      price: 500,
      image: 'http://placehold.it/',
      stock: 12,
    },
  ];

  getAll(): Product[] {
    return this.products;
  }

  getById(id: string): Product {
    return this.products.find((product) => product.id === id);
  }

  create(product: Product): Product {
    const newId: string = randomUUID().toString();
    this.products.push({ ...product, id: newId });
    return this.getById(newId);
  }

  update(id: string, payload: ProductUpdated): Product {
    const index = this.products.findIndex((item) => item.id === id);
    this.products[index] = { ...this.products[index], ...payload };
    return this.getById(id);
  }

  deleteById(id: string): { message: string } {
    const index = this.products.findIndex((item) => item.id === id);
    this.products.splice(index, 1);
    return { message: `Product ${id} was deleted succesfully` };
  }
}
