import { Model } from 'mongoose';
import { Product } from './product.schema';
import { CategoriesService } from 'src/categories/categories.service';
export declare class ProductService {
    private productModel;
    private categoriesService;
    constructor(productModel: Model<Product>, categoriesService: CategoriesService);
    addProduct(createProducDTO: any): Promise<any>;
    getProduct(query: Object): Promise<any>;
    getProductHierarchyDiscount(product: Product): Promise<any>;
}
