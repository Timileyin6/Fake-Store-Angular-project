import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CartServiceService } from '../cart-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private cartService: CartServiceService){}

  getTotalQuantity(){
   return this.cartService.getTotalItems()
  }
}
 