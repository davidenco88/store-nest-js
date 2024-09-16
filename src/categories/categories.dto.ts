import { IsString, IsNotEmpty, IsUUID, IsOptional } from 'class-validator';
import { PartialType, OmitType } from '@nestjs/mapped-types';

export class Category {
  @IsUUID()
  @IsNotEmpty()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsNotEmpty()
  readonly name: string;
}

export class CreateCategory extends OmitType(Category, ['id']) {}
export class UpdateCategory extends PartialType(CreateCategory) {}
