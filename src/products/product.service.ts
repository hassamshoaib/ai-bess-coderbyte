import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Product } from './product.schema';
import { CategoriesService } from 'src/categories/categories.service';
@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
    private categoriesService: CategoriesService,
  ) {}

  async addProduct(createProducDTO): Promise<any> {
    const newProduct = await this.productModel.create(createProducDTO);

    return newProduct;
  }

  async getProduct(query: Object): Promise<any> {
    const product = await this.productModel.findOne(query);
    console.log('Get product ', query);
    return product;
  }

  async getProductHierarchyDiscount(product: Product): Promise<any> {
    const { discount, categoryReference } = product;
    if (discount > 0) return discount;
    const categoryDiscount =
      await this.categoriesService.getRecursiveCategoryDiscount(
        categoryReference,
      );
    return categoryDiscount;
  }
}
