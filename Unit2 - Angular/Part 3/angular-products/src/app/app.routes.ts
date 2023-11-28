import { Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { numericIdGuard } from './guards/numeric-id.guard';
import { leavePageGuard } from './guards/leave-page.guard';
import { productResolver } from './resolvers/product.resolver';

export const routes: Routes = [
  {
    path: 'products',
    title: 'Products | Angular products',
    component: ProductsPageComponent,
  },
  {
    path: 'products/add',
    title: 'New product | Angular products',
    canDeactivate: [leavePageGuard],
    component: ProductFormComponent,
  },
  {
    path: 'products/:id',
    canActivate: [numericIdGuard],
    resolve: {
      product: productResolver
    },
    component: ProductDetailComponent,
  },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  // Aquí podríamos cargar un página de error 404 por ejemplo
  { path: '**', redirectTo: '/products' },
];