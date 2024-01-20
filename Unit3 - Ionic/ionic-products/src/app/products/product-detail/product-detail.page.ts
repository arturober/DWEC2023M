import { Component, EnvironmentInjector, Input, OnInit, inject, signal } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel]
})
export class ProductDetailPage implements OnInit {
  @Input() id!: number;
  product = signal<Product|null>(null);

  #productsService = inject(ProductsService);
  environmentInjector = inject(EnvironmentInjector);

  constructor() { }

  ngOnInit() {
    this.#productsService.getProduct(this.id).subscribe(
      p => this.product.set(p)
    )
  }
}
