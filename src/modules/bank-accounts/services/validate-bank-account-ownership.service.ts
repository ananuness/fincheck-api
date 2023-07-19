import { Injectable, NotFoundException } from '@nestjs/common';
import { BankAccountRepository } from 'src/repository/bank-account.repository';

@Injectable()
export class ValidateBankAccountOwnershipService {
  constructor(private readonly bankAccountRepository: BankAccountRepository) {}

  async validate(userId: string, BankAccountId: string) {
    const isOwner = await this.bankAccountRepository.findFirst({
      where: { userId, id: BankAccountId },
    });

    if (!isOwner) throw new NotFoundException('Bank Account not found');
  }
}
