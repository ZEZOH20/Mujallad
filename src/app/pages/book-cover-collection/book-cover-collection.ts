import { Component } from '@angular/core';
import { CardComponent } from '../../shared/components/card-component/card-component';
import { FilterComponent } from '../../shared/components/filter-component/filter-component';
import { PaginationComponent } from '../../shared/components/pagination-component/pagination-component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-book-cover-collection',
  imports: [CommonModule,CardComponent,FilterComponent,PaginationComponent],
  templateUrl: './book-cover-collection.html'
})
export class BookCoverCollection {

}
