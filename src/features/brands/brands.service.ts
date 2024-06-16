import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';

import { Brand, BrandCreate, BrandUpdate } from './brands.dto';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    {
      id: randomUUID().toString(),
      name: 'Brand 1',
      image: 'https://i.imgur.com/U4iGx1j.jpeg',
    },
  ];

  getAll(): Brand[] {
    return this.brands;
  }

  getById(id: string): Brand {
    const brand = this.brands.find((item) => item.id === id);
    if (!brand) {
      throw new NotFoundException(`Brand ${id} not found`);
    }

    return brand;
  }

  create(payload: BrandCreate): Brand {
    const newId = randomUUID().toString();
    this.brands.push({ id: newId, ...payload });
    return this.getById(newId);
  }

  update(id: string, payload: BrandUpdate): Brand {
    const index = this.brands.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Brand ${id} not found`);
    }
    this.brands[index] = { ...this.brands[index], ...payload };

    return this.getById(id);
  }

  delete(id: string): { isDeleted: boolean; message: string } {
    const index = this.brands.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Brand ${id} not found`);
    }
    this.brands.splice(index, 1);
    return {
      isDeleted: true,
      message: `Brand ${id} was deleted succesfully`,
    };
  }
}
