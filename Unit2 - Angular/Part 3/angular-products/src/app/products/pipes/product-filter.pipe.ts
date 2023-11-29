import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'productFilter',
  standalone: true,
})
export class ProductFilterPipe implements PipeTransform {
  transform(products: Product[] | null, search: string): Product[] | null {
    if (!search || !products) return products;
    return products.filter((p) =>
      p.description.toLowerCase().includes(search.toLowerCase())
    );
  }
}
