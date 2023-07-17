import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserRepository } from 'src/repository/user.repository';
import { CategoryRepository } from 'src/repository/category.repository';
import { BankAccountRepository } from 'src/repository/bank-accounts.repository';

@Global()
@Module({
  providers: [
    PrismaService,
    UserRepository,
    CategoryRepository,
    BankAccountRepository,
  ],
  exports: [UserRepository, CategoryRepository, BankAccountRepository],
})
export class DatabaseModule {}
