import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../interfaces/product';
import { ProductFilterPipe } from '../pipes/product-filter.pipe';
import { ProductFormComponent } from '../product-form/product-form.component';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'products-page',
  standalone: true,
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
  imports: [
    CommonModule,
    FormsModule,
    ProductFilterPipe,
    ProductItemComponent,
    ProductFormComponent,
  ],
})
export class ProductsPageComponent implements OnInit {
  #productsService = inject(ProductsService);

  title = "My product's list";
  headers = { description: 'Product', price: 'Price', available: 'Available' };
  products: Product[] = [];
  showImage = true;
  search = '';

  ngOnInit(): void {
    this.#productsService
      .getProducts()
      .subscribe({
        next: (products) => (this.products = products),
        error: (error) => console.error(error)
      });

  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  addProduct(newProduct: Product) {
    newProduct.id = Math.max(...this.products.map((p) => p.id!)) + 1;
    this.products = [...this.products, newProduct];
  }

  deleteProduct(product: Product) {
    this.products = this.products.filter((p) => p !== product);
  }
}
