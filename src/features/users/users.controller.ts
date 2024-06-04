import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getEndPonit(): string {
    return 'your are in users endponit';
  }
}
