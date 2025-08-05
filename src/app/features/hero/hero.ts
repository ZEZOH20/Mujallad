import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button-component/button-component';

@Component({
  selector: 'app-hero',
  imports: [ButtonComponent],
  templateUrl: './hero.html'
})
export class Hero {
  handleButtonClick() {
    console.log('Custom Design button clicked');
  }
}
