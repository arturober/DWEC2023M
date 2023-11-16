import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../interfaces/product';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from "../pipes/product-filter.pipe";
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductFormComponent } from '../product-form/product-form.component';

@Component({
    selector: 'products-page',
    standalone: true,
    templateUrl: './products-page.component.html',
    styleUrl: './products-page.component.css',
    imports: [CommonModule, FormsModule, ProductFilterPipe, ProductItemComponent, ProductFormComponent]
})
export class ProductsPageComponent implements OnInit {
  title = "My product's list";
  headers = {description: 'Product', price: 'Price', available: 'Available'};
  products: Product[] = [{
    id: 1,
    description: 'SSD hard drive',
    available: '2016-10-03',
    price: 75,
    imageUrl: 'assets/dinosaur.jpg',
    rating: 5
  },{
    id: 2,
    description: 'LGA1151 Motherboard',
    available: '2016-09-15',
    price: 96.95,
    imageUrl: 'assets/hand.jpg',
    rating: 4
  },{
    id: 3,
    description: 'Chicken',
    available: '2023-10-15',
    price: 10,
    imageUrl: 'assets/chicken.jpg',
    rating: 2
  }];
  showImage = true;
  search = '';

  ngOnInit(): void {
    console.log('Products page has been initialized');
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  addProduct(newProduct: Product) {
    newProduct.id = Math.max(...this.products.map(p => p.id!)) + 1;
    this.products = [...this.products, newProduct];
  }

  deleteProduct(product: Product) {
    this.products = this.products.filter(p => p !== product);
  }

}
