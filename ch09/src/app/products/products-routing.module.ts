import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { productDetailResolver } from './product-detail.resolver';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent, },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
    // resolve -> ensure that some data is retrieved before the ProductDetailComponent is activated and displayed
    resolve: {
      // result set to an object where the 'key'('product') represents the name of the property available in the activated route.
      product: productDetailResolver
    }
  },
  { path: '', redirectTo: '/products', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
