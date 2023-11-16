import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../interfaces/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'product-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  @Output() add = new EventEmitter<Product>();
  newProduct!: Product;
  fileName!: string;

  constructor() {
    this.resetForm();
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
    this.add.emit(this.newProduct);
    this.resetForm();
  }

  resetForm() {
    this.newProduct = {
      description: '',
      price: 0,
      available: '',
      imageUrl: '',
      rating: 0
    }
    this.fileName = '';
  }
}
