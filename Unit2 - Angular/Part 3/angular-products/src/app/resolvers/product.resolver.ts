import { ResolveFn, Router } from '@angular/router';
import { Product } from '../interfaces/product';
import { inject } from '@angular/core';
import { catchError, EMPTY } from 'rxjs';
import { ProductsService } from '../services/products.service';

export const productResolver: ResolveFn<Product> = (route) => {
  return inject(ProductsService)
    .getProduct(+route.params['id'])
    .pipe(
      catchError(() => {
        inject(Router).navigate(['/products']);
        return EMPTY;
      })
    );
};
