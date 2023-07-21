import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUUID,
} from 'class-validator';
import { TransactionType } from '../entities/TransactionType';

export class CreateTransactionDto {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  bankAccountId: string;

  @IsString()
  @IsUUID()
  categoryId: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  value: number;

  @IsDateString()
  @IsNotEmpty()
  date: string;

  @IsEnum(TransactionType)
  @IsNotEmpty()
  type: TransactionType;
}
