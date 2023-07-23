import { Injectable } from '@nestjs/common';
import { CreateBankAccountDto } from '../dto/create-bank-account.dto';
import { UpdateBankAccountDto } from '../dto/update-bank-account.dto';
import { BankAccountRepository } from 'src/repository/bank-account.repository';
import { ValidateBankAccountOwnershipService } from './validate-bank-account-ownership.service';

@Injectable()
export class BankAccountsService {
  constructor(
    private readonly bankAccountRepository: BankAccountRepository,
    private readonly validateBankAccountOwnershipService: ValidateBankAccountOwnershipService,
  ) {}

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

  async findAllByUserId(userId: string) {
    const bankAccounts = await this.bankAccountRepository.findMany({
      where: { userId },
      include: {
        transactions: {
          select: {
            value: true,
            type: true,
          },
        },
      },
    });

    return bankAccounts.map(({ transactions, ...bankAccount }) => {
      const totalTransactions = transactions.reduce(
        (acc, transaction) =>
          acc +
          (transaction.type === 'INCOME'
            ? transaction.value
            : -transaction.value),
        0,
      );

      const currentBalance = bankAccount.initialBalance + totalTransactions;

      return { ...bankAccount, currentBalance };
    });
  }

  async update(
    userId: string,
    BankAccountId: string,
    updateBankAccountDto: UpdateBankAccountDto,
  ) {
    await this.validateBankAccountOwnershipService.validate(
      userId,
      BankAccountId,
    );

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

  async remove(userId: string, BankAccountId: string) {
    await this.validateBankAccountOwnershipService.validate(
      userId,
      BankAccountId,
    );

    await this.bankAccountRepository.delete({
      where: { id: BankAccountId },
    });

    return null;
  }
}
