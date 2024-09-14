import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { User, CreateUser, UpdateUser } from './users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAll(): User[] {
    return this.usersService.getAll();
  }

  @Get(':id')
  getById(@Param('id') userId: string): User {
    return this.usersService.getById(userId);
  }

  @Post()
  created(@Body() payload: CreateUser): User {
    return this.usersService.create(payload);
  }

  @Put(':id')
  update(@Param('id') userId: string, @Body() payload: UpdateUser) {
    return this.usersService.update(userId, payload);
  }

  @Delete(':id')
  delete(@Param('id') userId: string) {
    return this.usersService.delete(userId);
  }
}
