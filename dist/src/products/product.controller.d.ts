import { ProductService } from './product.service';
import { CreateProductDTO } from './dto/create-product.dto';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    addProduct(createProductDTO: CreateProductDTO): Promise<any>;
    getProduct(): void;
}
