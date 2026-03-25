import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
//import * as path from 'path';
import { Product } from './product.interface';

@Injectable()
export class ProductService {
  findAll(): Product[] {
    const rawdata = fs.readFileSync('data/products.json', 'utf-8');
    const data = JSON.parse(rawdata) as Product[];
    return data;
  }
}
