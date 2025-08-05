import { Component } from '@angular/core';
import { ButtonComponent } from '../button-component/button-component';
import { NewArrivalsComponent } from '../new-arrivals-component/new-arrivals-component';

@Component({
  standalone: true,
  selector: 'app-filter-component',
  imports: [ButtonComponent,NewArrivalsComponent],
  templateUrl: './filter-component.html'
})
export class FilterComponent {

}
