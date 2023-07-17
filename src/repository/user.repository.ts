import { Injectable } from '@nestjs/common';
import { PrismaService } from '../config/database/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.UserCreateArgs) {
    return this.prismaService.user.create(createDto);
  }

  findUnique(findUniqueDto: Prisma.UserFindUniqueArgs) {
    return this.prismaService.user.findUnique(findUniqueDto);
  }
}
