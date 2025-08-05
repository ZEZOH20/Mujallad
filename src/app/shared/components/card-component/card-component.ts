import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../button-component/button-component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-card-component',
  imports: [ButtonComponent],
  templateUrl: './card-component.html'
})
export class CardComponent {
  private router = inject(Router);
  handleClick() {
    console.log('Button clicked!');
    this.router.navigate(['/product-details']);
  }
}
