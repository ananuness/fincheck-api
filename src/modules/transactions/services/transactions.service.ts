import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { UpdateTransactionDto } from '../dto/update-transaction.dto';
import { TransactionRepository } from 'src/repository/transaction.repository';
import { ValidateBankAccountOwnershipService } from '../../bank-accounts/services/validate-bank-account-ownership.service';
import { ValidateCategoryOwnershipService } from '../../categories/services/validate-category-ownership.service';
import { ValidateTransactionOwnershipService } from './validate-transaction-ownership.service';

@Injectable()
export class TransactionsService {
  constructor(
    private readonly transactionRepository: TransactionRepository,
    private readonly validateBankAccountOwnershipService: ValidateBankAccountOwnershipService,
    private readonly validateCategoryOwnershipService: ValidateCategoryOwnershipService,
    private readonly validateTransactionOwnershipService: ValidateTransactionOwnershipService,
  ) {}

  async create(userId: string, createTransactionDto: CreateTransactionDto) {
    const { bankAccountId, categoryId, name, value, date, type } =
      createTransactionDto;

    await this.validateOwnership(userId, bankAccountId, categoryId);

    return this.transactionRepository.create({
      data: {
        userId,
        bankAccountId,
        categoryId,
        name,
        value,
        date,
        type,
      },
    });
  }

  findAllByUserId(userId: string) {
    return this.transactionRepository.findMany({
      where: { userId },
    });
  }

  async update(
    userId: string,
    transactionId: string,
    updateTransactionDto: UpdateTransactionDto,
  ) {
    const { bankAccountId, categoryId, name, value, date, type } =
      updateTransactionDto;

    await this.validateOwnership(
      userId,
      bankAccountId,
      categoryId,
      transactionId,
    );

    return this.transactionRepository.update({
      where: { id: transactionId },
      data: {
        bankAccountId,
        categoryId,
        name,
        value,
        date,
        type,
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }

  private async validateOwnership(
    userId: string,
    bankAccountId: string,
    categoryId: string,
    transactionId?: string,
  ) {
    await Promise.all([
      this.validateTransactionOwnershipService.validate(userId, transactionId),
      this.validateBankAccountOwnershipService.validate(userId, bankAccountId),
      this.validateCategoryOwnershipService.validate(userId, categoryId),
    ]);
  }
}