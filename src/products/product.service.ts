import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
import * as path from 'path';
import { Product } from './product.interface';

@Injectable()
export class ProductService {
  private readonly filePath = path.join(process.cwd(), 'data', 'products.json');

  constructor(private readonly productService: ProductService) {}

  private async readData(): Promise<Product[]> {
    const data = await fs.readFile(this.filePath, 'utf-8');
    return JSON.parse(data) as Product[];
  }

  async findAll(): Promise<Product[]> {
    return await this.readData();
  }
}
