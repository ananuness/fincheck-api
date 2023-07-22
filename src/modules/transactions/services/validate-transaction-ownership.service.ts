import { Injectable, NotFoundException } from '@nestjs/common';
import { TransactionRepository } from 'src/repository/transaction.repository';

@Injectable()
export class ValidateTransactionOwnershipService {
  constructor(private readonly transactionRepository: TransactionRepository) {}

  async validate(userId: string, transactionId: string) {
    const isOwner = await this.transactionRepository.findFirst({
      where: { userId, id: transactionId },
    });

    if (!isOwner) throw new NotFoundException('Transaction not found');
  }
}
