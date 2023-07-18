import { Injectable } from '@nestjs/common';
import { PrismaService } from '../config/database/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class BankAccountRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.BankAccountCreateArgs) {
    return this.prismaService.bankAccount.create(createDto);
  }

  findMany(findManyDto: Prisma.BankAccountFindManyArgs) {
    return this.prismaService.bankAccount.findMany(findManyDto);
  }
}
