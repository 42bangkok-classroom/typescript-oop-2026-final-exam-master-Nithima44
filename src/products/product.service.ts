import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { Product } from './product.interface';

@Injectable()
export class ProductService {
  findAll(): Product[] {
    const data = fs.readFileSync('data/products.json', 'utf-8');
    return JSON.parse(data) as Product[];
  }
}
