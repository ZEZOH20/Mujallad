import { Component } from '@angular/core';
import { CardComponent } from '../../shared/components/card-component/card-component';
import { SectionTitleComponent } from '../../shared/components/section-title-component/section-title-component';

@Component({
  selector: 'app-products',
  imports: [CardComponent,SectionTitleComponent],
  templateUrl: './products.html',
})
export class Products {

}
