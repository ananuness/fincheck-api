import { Injectable } from '@nestjs/common';
import { PrismaService } from '../config/database/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CategoryRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany(findManyDto: Prisma.CategoryFindManyArgs) {
    return this.prismaService.category.findMany(findManyDto);
  }
}
