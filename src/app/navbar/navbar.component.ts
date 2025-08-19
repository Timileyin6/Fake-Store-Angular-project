import { Component, signal, Signal, WritableSignal } from '@angular/core';
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
  public isLinkOpen: WritableSignal<boolean> = signal(false)

  public toggleLinks() : void{
    this.isLinkOpen.set(!this.isLinkOpen())
  }

  getTotalQuantity(){
   return this.cartService.getTotalItems()
  }
}
 