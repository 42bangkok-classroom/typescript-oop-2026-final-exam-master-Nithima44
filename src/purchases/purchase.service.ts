import { Injectable } from '@nestjs/common';
import { Purchase } from './purchase.interface';
import * as fs from 'fs';

@Injectable()
export class PurchaseService {
  findAll(): Purchase[] {
    const data = fs.readFileSync('data/products.json', 'utf-8');
    return JSON.parse(data) as Purchase[];
  }
}
