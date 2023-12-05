import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  inject
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Product } from '../interfaces/product';
import { StarRatingComponent } from '../../star-rating/star-rating.component';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [CommonModule, StarRatingComponent, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  @Input() product!: Product;

  #productsService = inject(ProductsService);
  #router = inject(Router);

  changeRating(rating: number) {
    const oldRating = this.product!.rating;
    this.product!.rating = rating;
    this.#productsService.changeRating(this.product!.id!, rating).subscribe({
      error: () => (this.product!.rating = oldRating),
    });
  }

  goBack() {
    this.#router.navigate(['/products']);
  }
}
