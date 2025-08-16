import { Routes } from '@angular/router';
import { BuyerProductPageComponent } from './buyer-product-page/buyer-product-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { LoginPageComponent } from './login-page/login-page.component';

export const routes: Routes = [
     {path:"",  component: BuyerProductPageComponent},
    {path:"home",  component: BuyerProductPageComponent},
    {path: 'cart', component: CartPageComponent},
    {path: 'cart/checkout', component: CheckoutPageComponent},
      { path: 'product/:id', component: ProductPageComponent },
      {path: 'wishlist', component: WishlistComponent},
      {path: 'profile', component: LoginPageComponent},
    {path: '**', component: PageNotFoundComponent},
];
