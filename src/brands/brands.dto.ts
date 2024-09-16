import { IsString, IsUrl, IsNotEmpty, IsOptional } from 'class-validator';
import { PartialType, OmitType } from '@nestjs/mapped-types';

export class Brand {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

export class BrandCreate extends OmitType(Brand, ['id']) {}
export class BrandUpdate extends PartialType(BrandCreate) {}
