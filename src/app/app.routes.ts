import { Routes } from '@angular/router';
export const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'book-cover-collection', loadComponent: () => import('./pages/book-cover-collection/book-cover-collection').then(m => m.BookCoverCollection) },
  { path: 'product-details', loadComponent: () => import('./pages/product-details/product-details').then(m => m.ProductDetails) },
  { path: 'shoping-cart', loadComponent: () => import('./pages/shoping-cart/shoping-cart').then(m => m.ShopingCart) },
  {
    path: '',
    loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard),
    children:[{
      path: 'dashboard',
      loadChildren: () => import('./dashboard.routes').then(m => m.dashboardRoutes)
    }]
  },
  { path: 'checkout', loadComponent: () => import('./pages/checkout/checkout').then(m => m.Checkout) },
  { path: '**', redirectTo: '/home' }

];
