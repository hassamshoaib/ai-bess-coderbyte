import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Category } from './categories.schema';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}
  async addCategory(createCategoryDTO): Promise<any> {
    const newCategory = await this.categoryModel.create(createCategoryDTO);

    return newCategory;
  }

  async getRecursiveCategoryDiscount(categoryReference: string): Promise<any> {
    if (!categoryReference) return -1;

    const category = await this.categoryModel.findOne({
      id: categoryReference,
    });
    const { parentCategoryReference, discount } = category;
    if (discount > 0) return discount;

    if (!parentCategoryReference) return -1;

    return await this.getRecursiveCategoryDiscount(parentCategoryReference);
  }
}
