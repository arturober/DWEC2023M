import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../interfaces/product';
import { StarRatingComponent } from '../../star-rating/star-rating.component';
import { ProductsService } from '../services/products.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'product-item',
  standalone: true,
  imports: [CommonModule, StarRatingComponent, RouterLink],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input({ required: true }) product!: Product;
  @Input() showImage: boolean = true;
  @Output() deleted = new EventEmitter<void>();

  #productsService = inject(ProductsService);

  changeRating(rating: number) {
    const oldRating = this.product.rating;
    this.product.rating = rating;
    this.#productsService.changeRating(this.product.id!, rating).subscribe({
      error: () => (this.product.rating = oldRating),
    });
  }

  delete() {
    this.#productsService
      .deleteProduct(this.product.id!)
      .subscribe(() => this.deleted.emit());
  }
}
