import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsOptional,
  IsUUID,
  Length,
} from 'class-validator';

import { PartialType, OmitType } from '@nestjs/mapped-types';

export class User {
  @IsUUID()
  @IsNotEmpty()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsEmail()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6)
  readonly password: string;

  @IsNotEmpty()
  readonly role: string;
}

export class CreateUser extends OmitType(User, ['id']) {}
export class UpdateUser extends PartialType(CreateUser) {}
