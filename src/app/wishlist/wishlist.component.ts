import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../interface/product';
import { Observable, of } from 'rxjs';
import { ProductService } from '../services/product.service';
import { CartServiceService } from '../cart-service.service';
import { WishlistService } from '../wishlist.service';


@Component({
  selector: 'app-wishlist',
  imports: [CommonModule, FormsModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {
  public wishlistItems: Observable<Product[]> = of([])
  public recommendedProducts: Observable<Product[]> = of([])
  public searchInput: string = ''
  
    constructor(private productService: ProductService,
      private cartService: CartServiceService ,
      private wishlistService: WishlistService
    ){}
  
    ngOnInit(): void {
    this.wishlistItems = this.wishlistService.getWishlistItems()
    this.recommendedProducts = this.productService.getAllProducts()
  }
  
    public addToCart(product : Product, productId:number): void {
      this.cartService.addToCart(product)
    }
  
    public productCartQuantity(product : Product, productId:number): number{
          return this.cartService.productQuantity(productId, product)
    }
  
    public goToProduct(productId: number): void {
      this.productService.goToProduct(productId)
  }

  public addToWishlist(Product: Product) : void{
    this.wishlistService.addToWishlist(Product)
  }
  
}
