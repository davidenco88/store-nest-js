import { Injectable, NotFoundException } from '@nestjs/common';
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
    const product = this.products.find((item) => item.id === id);

    if (!product) {
      throw new NotFoundException(`Product ${id} not found`);
    }

    return product;
  }

  //Pendiente la validación del Payload
  create(product: Product): Product {
    const newId: string = randomUUID().toString();
    this.products.push({ ...product, id: newId });
    return this.getById(newId);
  }

  //Pendiente la validación del Payload
  update(id: string, payload: ProductUpdated): Product {
    const index = this.products.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new NotFoundException(`Product ${id} not found`);
    }

    this.products[index] = { ...this.products[index], ...payload };
    return this.getById(id);
  }

  deleteById(id: string): { isDelted: boolean; message: string } {
    const index = this.products.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new NotFoundException(`Product ${id} not found`);
    }

    this.products.splice(index, 1);
    return { isDelted: true, message: `Product ${id} was deleted succesfully` };
  }
}
