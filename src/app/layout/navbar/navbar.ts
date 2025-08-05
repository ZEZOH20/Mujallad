import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser,faShoppingCart, faSearch,faBars } from '@fortawesome/free-solid-svg-icons';
@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [FontAwesomeModule,RouterLink],
  templateUrl: './navbar.html'
})
export class Navbar {
 faBars = faBars;
 faSearch = faSearch;
 faShoppingCart= faShoppingCart;
 faUser = faUser;


}
