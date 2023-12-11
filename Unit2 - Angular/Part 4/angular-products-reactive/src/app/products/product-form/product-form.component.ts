import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { FormControl, NgForm, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CanDeactivateComponent } from '../../interfaces/can-deactivate-component';
import { ProductsService } from '../services/products.service';
import { Product } from '../interfaces/product';
import { minDateValidator } from '../../validators/min-date.validator';

@Component({
  selector: 'product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements CanDeactivateComponent {
  saved = false;
  imageBase64 = '';

  #fb = inject(NonNullableFormBuilder);

  description = this.#fb.control('', [Validators.required, Validators.minLength(5)]);
  price = this.#fb.control(0, [Validators.required, Validators.min(0.1)]);
  available = this.#fb.control('', [Validators.required, minDateValidator('2023-09-01')]);
  imageUrl = this.#fb.control('', Validators.required);

  productForm = this.#fb.group({
    description: this.description,
    price: this.price,
    available: this.available,
    imageUrl: this.imageUrl,
  });

  #productsService = inject(ProductsService);
  #router = inject(Router);

  @ViewChild('addForm') addForm!: NgForm;

  constructor() {
    this.resetForm();
  }

  canDeactivate() {
    return this.saved || this.addForm.pristine || confirm('Do you want to leave this page?. Changes canbe lost');
  }

  changeImage(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (!fileInput.files || fileInput.files.length === 0) return;
    const reader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', () => {
      this.imageBase64 = reader.result as string;
    });
  }

  addProduct() {
    const product: Product = {
      ...this.productForm.getRawValue(),
      rating: 1,
      imageUrl: this.imageBase64,
    };
    this.#productsService.addProduct(product).subscribe({
      next: () => {
        this.saved = true;
        localStorage.removeItem("newProduct");
        this.#router.navigate(['/products']);
      },
      error: (error) => console.error(error)
    });
  }

  validClasses(control: FormControl, validClass: string, errorClass: string) {
    return {
      [validClass]: control.touched && control.valid,
      [errorClass]: control.touched && control.invalid
    };
  }

  resetForm() {
    this.productForm.reset();
  }
}
