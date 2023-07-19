import { Injectable, NotFoundException } from '@nestjs/common';
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
    return this.bankAccountRepository.findMany({
      where: { userId },
    });
  }

  async update(
    userId: string,
    BankAccountId: string,
    updateBankAccountDto: UpdateBankAccountDto,
  ) {
    const isOwner = await this.bankAccountRepository.findFirst({
      where: { userId, id: BankAccountId },
    });

    if (!isOwner) throw new NotFoundException('Bank Account not found');

    const { name, type, initialBalance, color } = updateBankAccountDto;

    return this.bankAccountRepository.update({
      where: { id: BankAccountId },
      data: {
        name,
        type,
        initialBalance,
        color,
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} bankAccount`;
  }
}
