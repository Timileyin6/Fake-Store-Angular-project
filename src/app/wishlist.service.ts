import { Injectable } from '@angular/core';
import { Product } from './interface/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlistItems = new BehaviorSubject<Product[]>([])
  public wishlistBehavior = this.wishlistItems.asObservable()

  constructor() { }
  public addToWishlist(Product: Product){
    const wishlistCopy = this.wishlistItems.value
    const checkWishlist = wishlistCopy.findIndex(item=> item.id === Product.id)
    if(checkWishlist === -1){
      const updatedItems = [...wishlistCopy, {...Product}]
      this.wishlistItems.next(updatedItems)
    }else{
      alert('Item is already in wishlist!')
    }
  }

  public getWishlistItems(){
    return this.wishlistBehavior
  }
}
