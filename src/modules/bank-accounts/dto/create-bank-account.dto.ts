import { IsEnum, IsHexColor, IsNotEmpty, IsString } from 'class-validator';
import { BankAccountType } from '../entities/BankAccountType';

export class CreateBankAccountDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  initialBalance: number;

  @IsEnum(BankAccountType)
  @IsNotEmpty()
  type: BankAccountType;

  @IsString()
  @IsNotEmpty()
  @IsHexColor()
  color: string;
}
