import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDTO } from './dto/create-product.dto';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  async addProduct(@Body() createProductDTO: CreateProductDTO): Promise<any> {
    const newProduct = await this.productService.addProduct(createProductDTO);

    console.log('New product ', newProduct);
  }

  @Get()
  getProduct() {
    console.log('Product found');
  }
}
