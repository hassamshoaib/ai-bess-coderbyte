import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ProductService } from '../products/product.service';
import { GetProductDiscountDTO } from './dto/get-product-discount.dto';
import { UserGuard } from '../authentication/user.guard';

@Controller('payments')
export class PaymentsController {
  constructor(private productsService: ProductService) {}

  @Get('product-discount')
  @UseGuards(UserGuard)
  async getProductDiscount(
    @Query() getProductDiscountDTO: GetProductDiscountDTO,
  ): Promise<any> {
    const { productCode } = getProductDiscountDTO;
    const product = await this.productsService.getProduct({
      code: productCode,
    });

    const productDiscount =
      await this.productsService.getProductHierarchyDiscount(product);
    return productDiscount;
  }
}
