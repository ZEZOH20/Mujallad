import { Component } from '@angular/core';
import { Card2Component } from '../../shared/components/card2-component/card2-component';
import { SectionTitleComponent } from '../../shared/components/section-title-component/section-title-component';

@Component({
  selector: 'app-categories',
  imports: [Card2Component,SectionTitleComponent],
  templateUrl: './categories.html'
})
export class Categories {

}
