import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { ActiveUserId } from 'src/utils/decorators/ActiveUserId';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  findAllByUserId(@ActiveUserId() userId: string) {
    return this.categoriesService.findAllByUserId(userId);
  }
}
