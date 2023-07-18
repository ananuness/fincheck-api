import { Injectable } from '@nestjs/common';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
import { BankAccountRepository } from 'src/repository/bank-accounts.repository';

@Injectable()
export class BankAccountsService {
  constructor(private readonly bankAccountRepository: BankAccountRepository) {}

  create(userId: string, createBankAccountDto: CreateBankAccountDto) {
    const { name, type, initialBalance, color } = createBankAccountDto;

    return this.bankAccountRepository.create({
      data: {
        userId,
        name,
        type,
        initialBalance,
        color,
      },
    });
  }

  findAllByUserId(userId: string) {
    return `This action returns all bankAccounts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bankAccount`;
  }

  update(id: number, updateBankAccountDto: UpdateBankAccountDto) {
    return `This action updates a #${id} bankAccount`;
  }

  remove(id: number) {
    return `This action removes a #${id} bankAccount`;
  }
}
