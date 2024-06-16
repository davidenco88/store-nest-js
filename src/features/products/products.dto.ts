import {
  IsString,
  IsNumber,
  IsUrl,
  IsPositive,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

import { PartialType, OmitType } from '@nestjs/mapped-types';

export class Product {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly price: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly stock: number;

  @IsString()
  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

export class ProductCreate extends OmitType(Product, ['id']) {}
export class ProductUpdated extends PartialType(ProductCreate) {}
