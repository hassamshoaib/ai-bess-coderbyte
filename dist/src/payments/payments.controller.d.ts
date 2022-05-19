import { ProductService } from '../products/product.service';
import { GetProductDiscountDTO } from './dto/get-product-discount.dto';
export declare class PaymentsController {
    private productsService;
    constructor(productsService: ProductService);
    getProductDiscount(getProductDiscountDTO: GetProductDiscountDTO): Promise<any>;
}
