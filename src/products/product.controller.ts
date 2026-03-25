/*import { Controller, Get } from '@nestjs/common';
import { ProductService } from './products/product.service';
import { Product } from './products/product.interface';
import { ApiResponse } from './interfaces/response.interface';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('products')
  async findAll(): Promise<ApiResponse<Product[]>> {
    const data = await this.productService.findAll();
    return { success: true, message: 'Fetched products successfully', data };
  }
}*/
