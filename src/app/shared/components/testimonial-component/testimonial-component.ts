import { Component } from '@angular/core';
import { SectionTitleComponent } from '../section-title-component/section-title-component';

@Component({
  standalone: true,
  selector: 'app-testimonial-component',
  imports: [SectionTitleComponent],
  templateUrl: './testimonial-component.html'
})
export class TestimonialComponent {

}
