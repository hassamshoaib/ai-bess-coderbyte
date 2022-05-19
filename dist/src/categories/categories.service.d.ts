import { Model } from 'mongoose';
import { Category } from './categories.schema';
export declare class CategoriesService {
    private categoryModel;
    constructor(categoryModel: Model<Category>);
    addCategory(createCategoryDTO: any): Promise<any>;
    getRecursiveCategoryDiscount(categoryReference: string): Promise<any>;
}
