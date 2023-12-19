import { CommonModule } from '@angular/common';
import { Component, OnInit, WritableSignal, computed, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../interfaces/product';
import { ProductFilterPipe } from '../pipes/product-filter.pipe';
import { ProductFormComponent } from '../product-form/product-form.component';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductsService } from '../services/products.service';
import { RouterLink } from '@angular/router';
import { trigger, transition, style, animate, state, query, stagger } from '@angular/animations';

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
    RouterLink
  ],
  animations: [
    trigger('animateProduct', [
      state('true', style({ backgroundColor: 'lightgreen' })),
      transition('false => true', animate('300ms ease-in')),
      transition('true => false', animate('300ms ease-out')),
    ]),
    trigger('animateList', [
      transition(':increment', [
        query('product-item:enter', [
          style({ opacity: 0, transform: 'translateX(-100px)' }),
          stagger(
            100,
            animate('500ms ease-out', style({ opacity: 1, transform: 'none' }))
          ),
        ]),
      ]),
    ]),
  ],
})
export class ProductsPageComponent implements OnInit {
  #productsService = inject(ProductsService);

  title = "My product's list";
  headers = { description: 'Product', price: 'Price', available: 'Available' };
  products: WritableSignal<Product[]> = signal([]);
  showImage = signal(true);
  search = signal('');

  filteredProducts = computed(() =>
    this.products().filter((p) =>
      p.description.toLowerCase().includes(this.search().toLowerCase())
    )
  );

  constructor() {
    effect(() =>
      console.log(`Products filtered: ${this.filteredProducts().length}`)
    );
  }

  ngOnInit(): void {
    this.#productsService
      .getProducts()
      .subscribe({
        next: (products) => (this.products.set(products)),
        error: (error) => console.error(error)
      });

  }

  toggleImage() {
    this.showImage.update(v => !v);
  }

  addProduct(newProduct: Product) {
    this.products.update(products => {
      products.push(newProduct);
      return products;
    });
  }

  deleteProduct(product: Product) {
    this.products.set(this.products().filter((p) => p !== product));
  }

  toggleSelect(product: Product) {
    product.selected = !product.selected;
  }
}
