import { Component } from '@angular/core';
import { Hero } from '../../features/hero/hero';
import { Products } from '../../features/products/products';
import { Categories } from '../../features/categories/categories';
import { BrandStory } from '../../features/brand-story/brand-story';
import { TestimonialComponent } from '../../shared/components/testimonial-component/testimonial-component';
import { NewsLetter } from '../../features/news-letter/news-letter';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [Hero, Products,Categories,BrandStory,TestimonialComponent,NewsLetter],
  templateUrl: './home.html'
})
export class Home {

}
