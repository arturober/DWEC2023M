import { ResolveFn, Router } from '@angular/router';
import { Product } from '../interfaces/product';
import { inject } from '@angular/core';
import { catchError, EMPTY } from 'rxjs';
import { ProductsService } from '../services/products.service';

export const productResolver: ResolveFn<Product> = (route) => {
  const router = inject(Router);
  return inject(ProductsService)
    .getProduct(+route.params['id'])
    .pipe(
      catchError(() => {
        router.navigate(['/products']);
        return EMPTY;
      })
    );
};
