import { Injectable } from '@nestjs/common';
import { CategoryRepository } from 'src/repository/category.repository';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  findAllByUserId(userId: string) {
    return this.categoryRepository.findMany({
      where: { userId },
    });
  }
}
