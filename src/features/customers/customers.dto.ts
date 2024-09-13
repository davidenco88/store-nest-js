import {
  IsString,
  IsNotEmpty,
  IsPhoneNumber,
  IsOptional,
  IsUUID,
} from 'class-validator';

import { PartialType, OmitType } from '@nestjs/mapped-types';

export class Customer {
  @IsUUID()
  @IsNotEmpty()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  readonly phone: string;
}

export class CreateCustomer extends OmitType(Customer, ['id']) {}
export class UpdateCustomer extends PartialType(CreateCustomer) {}
