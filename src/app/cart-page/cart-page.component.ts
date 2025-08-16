import { Component, effect, OnInit, signal, WritableSignal } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Product } from '../interface/product';
import { map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-cart-page',
  imports: [CommonModule, FormsModule, RouterLink, RouterModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent implements OnInit{
  public cartProducts: Observable<Product[]> = of([])
  constructor(private buyerCartItems: CartServiceService, private router: Router){  }

  ngOnInit(): void {
    this.cartProducts = this.buyerCartItems.getItems()
  }

  public removeFromCart(productId: number): void{
    this.cartProducts = (this.buyerCartItems.removeFromCart(productId))
  } 

  public getTotalPrice(): Observable<number> {
  return this.cartProducts.pipe(map(product=> product.reduce((sum, item) => sum + item.price * item.quantity, 0)));
}

 public getTotalItems(): Observable<number> {
  return this.cartProducts.pipe(map(item=> item.reduce((count, item) => count + item.quantity, 0)))
}


  public increment(Product : Product): void{
    this.buyerCartItems.increment(Product)
  }

  public decrement(product: Product): void{
    this.buyerCartItems.decrement(product)
  }
      

}
