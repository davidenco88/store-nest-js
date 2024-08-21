import { Injectable } from '@nestjs/common';
import { Category, CreateCategory, UpdateCategory } from './categories.dto';
import { randomUUID } from 'crypto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class CategoriesService {
  private categories: Category[] = [
    {
      id: randomUUID().toString(),
      name: 'Category 1',
    },
  ];

  getAll(): Category[] {
    return this.categories;
  }

  getById(id: string): Category {
    const category = this.categories.find((item) => item.id === id);
    if (!category) {
      throw new NotFoundException(`Categorie ${id} not found`);
    }

    return category;
  }

  create(payload: CreateCategory): Category {
    const newId = randomUUID().toString();
    this.categories.push({ id: newId, ...payload });
    return this.getById(newId);
  }

  update(id: string, payload: UpdateCategory): Category {
    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Category ${id} not found`);
    }
    this.categories[index] = { ...this.categories[index], ...payload };

    return this.getById(id);
  }

  delete(id: string): { isDeleted: boolean; message: string } {
    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Category ${id} not found`);
    }
    this.categories.splice(index, 1);
    return {
      isDeleted: true,
      message: `Category ${id} was deleted succesfully`,
    };
  }
}
