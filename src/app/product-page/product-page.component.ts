import { CommonModule } from '@angular/common';
import { Component, effect, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BuyerProductPageComponent } from '../buyer-product-page/buyer-product-page.component';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Route } from '@angular/router';
import { CartServiceService } from '../cart-service.service';
import { Product } from '../interface/product';

@Component({
  selector: 'app-product-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent implements OnInit{
  public mainProduct: any
  constructor(private homePage: ProductService,
     private route: ActivatedRoute,
     private cartService: CartServiceService){}

     ngOnInit(): void {
       this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'))
      if(id){
        this.homePage.getProductById(id).subscribe(product=>
          this.mainProduct =product
        )
      }
    }
  )
     }
    

  public addToCart(): void{
   const singleProduct = this.mainProduct
   if(singleProduct){
     this.cartService.addToCart(singleProduct)
   }
  }
}
