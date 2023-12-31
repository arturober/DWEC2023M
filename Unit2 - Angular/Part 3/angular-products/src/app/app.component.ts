import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProductsPageComponent } from './products/products-page/products-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    RouterOutlet,
    ProductsPageComponent,
    RouterLink,
    RouterLinkActive,
  ],
})
export class AppComponent {
  title = 'Angular Products';
  words = ['Dog', 'Cat', 'Bird', 'Horse'];
}
