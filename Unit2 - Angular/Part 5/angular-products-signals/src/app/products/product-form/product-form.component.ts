import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { CanDeactivateComponent } from '../../interfaces/can-deactivate-component';
import { ProductsService } from '../services/products.service';
import { Product } from '../interfaces/product';
import { MinDateDirective } from '../../validators/min-date.directive';
import { OneCheckedDirective } from '../../validators/one-checked.directive';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from '../../modals/confirm-modal/confirm-modal.component';

@Component({
  selector: 'product-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MinDateDirective, OneCheckedDirective],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent implements CanDeactivateComponent {
  newProduct!: Product;
  saved = false;
  // daysOpen = [false, false, false, false, false, false, false];
  // days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fry', 'Sat'];

  #productsService = inject(ProductsService);
  #router = inject(Router);
  #modalService = inject(NgbModal);


  @ViewChild('addForm') addForm!: NgForm;

  constructor() {
    this.resetForm();
  }

  canDeactivate() {
    if (this.saved || this.addForm.pristine) return true;

    const modalRef = this.#modalService.open(ConfirmModalComponent);
    modalRef.componentInstance.title = 'Changes not saved';
    modalRef.componentInstance.body = 'Do you want to leave the page?';
    return modalRef.result.catch(() => false);
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
        localStorage.removeItem('newProduct');
        this.#router.navigate(['/products']);
      },
      error: (error) => console.error(error),
    });
  }

  validClasses(ngModel: NgModel, validClass: string, errorClass: string) {
    return {
      [validClass]: ngModel.touched && ngModel.valid,
      [errorClass]: ngModel.touched && ngModel.invalid,
    };
  }

  resetForm() {
    this.newProduct = {
      description: '',
      price: 0,
      available: '',
      imageUrl: '',
      rating: 1,
    };
  }
}
