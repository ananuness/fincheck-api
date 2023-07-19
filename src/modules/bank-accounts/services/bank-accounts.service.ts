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
