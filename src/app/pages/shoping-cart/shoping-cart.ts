import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button-component/button-component';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-shoping-cart',
  imports: [ButtonComponent],
  templateUrl: './shoping-cart.html'
})
export class ShopingCart {
  private router = inject(Router);
  handleClick() {
    console.log('Button clicked!');
    this.router.navigate(['/checkout']);
  }
}
