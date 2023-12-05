import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import {
  ProductsResponse,
  SingleProductResponse,
} from '../interfaces/responses';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  #http = inject(HttpClient);
  #productsUrl = 'products';

  getProducts(): Observable<Product[]> {
    // return this.#http.get<ProductsResponse>(this.#productsUrl);
    // Si queremos devolver Observable<Product[]> directamente
    return this.#http
      .get<ProductsResponse>(this.#productsUrl)
      .pipe(map((resp) => resp.products));
  }

  getProduct(id: number): Observable<Product> {
    return this.#http
    .get<SingleProductResponse>(`${this.#productsUrl}/${id}`)
    .pipe(map((resp) => resp.product));
  }

  addProduct(product: Product): Observable<Product> {
    return this.#http
      .post<SingleProductResponse>(this.#productsUrl, product)
      .pipe(map((resp) => resp.product));
  }

  deleteProduct(id: number): Observable<void> {
    return this.#http.delete<void>(`${this.#productsUrl}/${id}`);
  }

  changeRating(idProduct: number, rating: number): Observable<void> {
    return this.#http.put<void>(`${this.#productsUrl}/${idProduct}/rating`, {
      rating,
    });
  }
}
