import { Controller, Get } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getEndPonit(): string {
    return 'your are in brands endponit';
  }
}
