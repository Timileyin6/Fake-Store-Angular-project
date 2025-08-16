import { CommonModule } from '@angular/common';
import { Component, effect,  OnInit,  Signal, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { CartServiceService } from '../cart-service.service';
import { Product } from '../interface/product';
import { find, map, Observable, of } from 'rxjs';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-buyer-product-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './buyer-product-page.component.html',
  styleUrl: './buyer-product-page.component.scss'
})
export class BuyerProductPageComponent implements OnInit{
   public products: Observable<Product[]> = of([])
   public categories: Observable<string[]> = of([])
   public category : string =''
   public searchInput: string = ''

  constructor(private productService: ProductService,
    private cartService: CartServiceService,
    private wishlistService: WishlistService
  ){}

  ngOnInit(): void {
  this.products = this.productService.getAllProducts()
  this.categories = this.productService.getProductCategories()
}

  public addToCart(product : Product): void {
    this.cartService.addToCart(product)
  }

  public addToWishlist(Product: Product){
    this.wishlistService.addToWishlist(Product)
  }

  public productCartQuantity(product : Product, productId:number): number{
        return this.cartService.productQuantity(productId, product)
  }

  public goToProduct(productId: number): void {
    this.productService.goToProduct(productId)
}

private getProductByCategory(category : string) : Observable<Product[]>{
  return this.productService.getProductByCategory(category)
}

public filterBySelect(selectValue: string): void {
  this.products =
    !this.category || selectValue === 'recommended'
      ? this.productService.getAllProducts()
      : this.getProductByCategory(selectValue);
}


public filterBySearch() : void {
  if(this.searchInput.trim() !== '') {
    const userInput = this.searchInput.toLowerCase()
    let filter = this.products
   // this.filteredProducts = filter.filter(product=> product.title.toLowerCase() !== userInput)
  }
}

}
