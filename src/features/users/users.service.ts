import { Injectable } from '@nestjs/common';
import { User, CreateUser, UpdateUser } from './users.dto';
import { randomUUID } from 'crypto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: randomUUID().toString(),
      email: 'admin@example.com',
      password: '123456',
      role: '+573156666666',
    },
  ];

  getAll(): User[] {
    return this.users;
  }

  getById(id: string): User {
    const user = this.users.find((item) => item.id === id);
    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }

    return user;
  }

  create(payload: CreateUser): User {
    const newId = randomUUID().toString();
    this.users.push({ id: newId, ...payload });
    return this.getById(newId);
  }

  update(id: string, payload: UpdateUser): User {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`User ${id} not found`);
    }
    this.users[index] = { ...this.users[index], ...payload };

    return this.getById(id);
  }

  delete(id: string): { isDeleted: boolean; message: string } {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`User ${id} not found`);
    }
    this.users.splice(index, 1);
    return {
      isDeleted: true,
      message: `User ${id} was deleted succesfully`,
    };
  }
}
