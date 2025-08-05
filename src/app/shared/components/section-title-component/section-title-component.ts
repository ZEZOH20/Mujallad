import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-section-title-component',
  imports: [],
  template: `
   <div class="text-center mb-12">
          <h3 class="font-heading text-3xl font-bold mb-4">{{title}}</h3>
          <p class="max-w-2xl mx-auto text-gray-600">{{description}}</p>
    </div>`,

})
export class SectionTitleComponent {
  @Input() title: string = 'Featured Collections';
  @Input() description: string = 'Discover our most sought-after book cover designs, each crafted with premium materials and attention to detail.'
}
