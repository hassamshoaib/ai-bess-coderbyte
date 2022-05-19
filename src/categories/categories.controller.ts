import { Controller, Post, Body } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDTO } from './dto/create-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private categoryService: CategoriesService) {}
  @Post()
  async addCategory(@Body() createCategoryDTO: CreateCategoryDTO) {
    console.log('Create category DTO', createCategoryDTO);
    const newCategory = await this.categoryService.addCategory(
      createCategoryDTO,
    );
    console.log('New category added ', newCategory);
  }
}
