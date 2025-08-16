import { Injectable, signal, WritableSignal } from '@angular/core';
import { Product } from './interface/product';
import { filter, map, Observable, of, BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor() { }
    private cartItemsSubject = new BehaviorSubject<Product[]>([]);
      public cartItems = this.cartItemsSubject.asObservable();
//private cartItems: Observable<Product[]> = of([])

  /*public addToCart(products: Product): void{
    const existing = this.cartItems.pipe(map(items =>items.find(item=>item.id == products.id)))
    existing ?
      existing.pipe(map(item=> 
      {}
         ))
      :
      this.cartItems.push({...products, quantity: 1})
    }*/

      public addToCart(products: Product): void {
    const currentItems = this.cartItemsSubject.value;
    const existingIndex = currentItems.findIndex(item => item.id === products.id);
    
    if (existingIndex !== -1) {
      // Item exists, increment quantity
      const updatedItems = [...currentItems];
      updatedItems[existingIndex] = {
        ...updatedItems[existingIndex],
        quantity: updatedItems[existingIndex].quantity + 1
      };
      this.cartItemsSubject.next(updatedItems);
    } else {
      // Item doesn't exist, add new item
      const updatedItems = [...currentItems, { ...products, quantity: 1 }];
      this.cartItemsSubject.next(updatedItems);
    }
  }
  
  public increment(Product: Product):void{
    const currentItems = this.cartItemsSubject.value;
   const productIndex = currentItems.findIndex(item=> item.id === Product.id)
   const updatedItems = [...currentItems]
   updatedItems[productIndex] = {...updatedItems[productIndex], quantity: updatedItems[productIndex].quantity+1}
   this.cartItemsSubject.next(updatedItems)
  }

  public decrement(Product: Product) : void {
    const currentItems = this.cartItemsSubject.value
    const itemIndex = currentItems.findIndex(item=> item.id === Product.id)
    let updatedItems = [...currentItems]
    if(Product.quantity>1){
      updatedItems[itemIndex] = {...updatedItems[itemIndex], quantity: updatedItems[itemIndex].quantity-1}
    }
    this.cartItemsSubject.next(updatedItems)
  } 

  public getItems(): Observable<Product[]>{
    return this.cartItems
  }

  public productQuantity(productId: number, product:Product){
    const inCart =  this.cartItems.pipe(map(items => items.find(item=> item.id == productId)))
    return inCart?product.quantity:0
  }

  public removeFromCart(productId: number): Observable<Product[]>{
    this.cartItems =(this.cartItems.pipe(map(items => items.filter(item=> item.id !== productId))))
    return this.cartItems
  }

 public getTotalItems(): Observable<number> {
  return this.cartItems.pipe(map(items => items.reduce((count, item) => count + item.quantity, 0)));
}

public clearCart(): void{
    this.cartItems= of([])
  }
} 
