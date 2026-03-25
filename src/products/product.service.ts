import { Injectable } from '@nestjs/common';
import { Product } from './product.interface';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ProductService {
  private readonly filePath = path.join(process.cwd(), 'data', 'products.json');
  private async readData(): Promise<Product[]> {
    try {
      const data = await fs.readFileSync(this.filePath, 'utf-8');
      return JSON.parse(data) as Product[];
    } catch (error) {
      return [];
    }
  }

  async findAll(): Promise<Product[]> {
    return await this.readData();
  }
}

/*  findAll(): Product[] {
    const data = fs.readFileSync('data/products.json', 'utf-8');
    return JSON.parse(data) as Product[];
  }
}*/
