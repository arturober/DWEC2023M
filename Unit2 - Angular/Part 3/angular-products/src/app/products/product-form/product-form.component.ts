import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CanDeactivateComponent } from '../../interfaces/can-deactivate-component';
import { ProductsService } from '../services/products.service';
import { Product } from '../interfaces/product';

@Component({
  selector: 'product-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements CanDeactivateComponent {
  newProduct!: Product;
  fileName!: string;
  saved = false;

  #productsService = inject(ProductsService);
  #router = inject(Router);

  constructor() {
    this.resetForm();
    const newProduct = localStorage.getItem("newProduct");
    if(newProduct) {
      this.newProduct = JSON.parse(newProduct);
    }
  }

  canDeactivate() {
    if(!this.saved) localStorage.setItem("newProduct", JSON.stringify(this.newProduct));
    return true;

    // return this.saved || confirm('Do you want to leave this page?. Changes canbe lost');
  }

  changeImage(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (!fileInput.files || fileInput.files.length === 0) return;
    const reader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', () => {
      this.newProduct.imageUrl = reader.result as string;
    });
  }

  addProduct() {
    this.#productsService.addProduct(this.newProduct).subscribe({
      next: () => {
        this.saved = true;
        localStorage.removeItem("newProduct");
        this.#router.navigate(['/products']);
      },
      error: (error) => console.error(error)
    });
  }

  resetForm() {
    this.newProduct = {
      description: '',
      price: 0,
      available: '',
      imageUrl: '',
      rating: 1
    }
    this.fileName = '';
  }
}
