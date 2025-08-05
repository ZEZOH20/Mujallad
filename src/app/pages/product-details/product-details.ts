import { Component } from '@angular/core';
import { CardComponent } from '../../shared/components/card-component/card-component';

@Component({
  standalone: true,
  selector: 'app-product-details',
  imports: [CardComponent],
  templateUrl: './product-details.html'
})
export class ProductDetails {

}
