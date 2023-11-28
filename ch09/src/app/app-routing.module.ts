import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { CartComponent } from './cart/cart.component';
import { checkoutGuard } from './checkout.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
    // Controls whether a route can be activated
    canActivate: [authGuard],
    // when the user wants to quit the page, preventing navigation away from a route
    canDeactivate: [checkoutGuard]
  },
  {
    path: 'about',
    // Lazy loading using module
    //loadChildren: () => import('./about/about.module').then(m => m.AboutModuleComponent),
    // using standalone, lazy loading
    loadComponent: () => import('./about/about-info/about-info.component').then(c => c.AboutInfoComponent),
    // Controls access to a route that loads a lazy-loaded module.
    canLoad: [authGuard]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
