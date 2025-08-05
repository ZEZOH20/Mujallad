
import { Routes } from '@angular/router';
export const dashboardRoutes: Routes = [
  { path: '', redirectTo: '/dashboard/orders', pathMatch: 'full' },
  {path: 'wishlist', loadComponent: () => import('./features/dashboard/wishlist/wishlist').then(m => m.Wishlist) },
  {path: 'orders', loadComponent: () => import('./features/dashboard/orders/orders').then(m => m.Orders) },
  {path: 'addresses', loadComponent: () => import('./features/dashboard/addresses/addresses').then(m => m.Addresses) },
  {path: 'account-settings', loadComponent: () => import('./features/dashboard/account-settings/account-settings').then(m => m.AccountSettings) },
  {path:'product-details', loadComponent: () => import('./pages/product-details/product-details').then(m => m.ProductDetails) },
  {path:'checkout', loadComponent: () => import('./pages/checkout/checkout').then(m => m.Checkout) },
  {path: '**', redirectTo: '/dashboard/orders' }
]
