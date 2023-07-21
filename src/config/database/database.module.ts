import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserRepository } from 'src/repository/user.repository';
import { CategoryRepository } from 'src/repository/category.repository';
import { BankAccountRepository } from 'src/repository/bank-account.repository';
import { TransactionRepository } from 'src/repository/transaction.repository';

@Global()
@Module({
  providers: [
    PrismaService,
    UserRepository,
    CategoryRepository,
    BankAccountRepository,
    TransactionRepository,
  ],
  exports: [
    UserRepository,
    CategoryRepository,
    BankAccountRepository,
    TransactionRepository,
  ],
})
export class DatabaseModule {}
