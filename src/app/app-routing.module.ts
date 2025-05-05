import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BrandsComponent } from './brands/brands.component';
import { ForgetPassordComponent } from './forget-passord/forget-passord.component';
import { VerifyResetCodeComponent } from './verify-reset-code/verify-reset-code.component';
import { ResetPassowrdComponent } from './reset-passowrd/reset-passowrd.component';
import { authGuard } from './Guards/auth.guard';
import { noAuthGuard } from './Guards/no-auth.guard';
import { CartComponent } from './cart/cart.component';

import { ShippingAdressComponent } from './shipping-adress/shipping-adress.component';
import { OrdersComponent } from './orders/orders.component';
import { CategoryproductComponent } from './categoryproduct/categoryproduct.component';

import { productDetailsComponent } from './product-details/product-details.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path: '',redirectTo:'home',pathMatch:'full'},
  {path: 'home', canActivate : [authGuard] ,component:HomeComponent},
  {path: 'cart', canActivate : [authGuard] ,component:CartComponent},
  {path:'products' , canActivate : [authGuard] ,component:ProductsComponent},
  {path:'Categories' , canActivate : [authGuard] ,component:CategoriesComponent},
 
  {path:'wishlist' , canActivate : [authGuard] ,component:WishlistComponent},
  {path:'product/:id' , canActivate : [authGuard] ,component:productDetailsComponent},
  {path:'register',canActivate : [noAuthGuard], component:RegisterComponent},
  {path:'login', canActivate : [noAuthGuard] ,component:LoginComponent},
  {path:'brands' , canActivate : [authGuard] ,component:BrandsComponent},
  {path:'shipping-adress/:id' , canActivate : [authGuard] ,component:ShippingAdressComponent},
  {path:'allorders' , canActivate : [authGuard] ,component:OrdersComponent},
  {path:'products/category/:id' , canActivate : [authGuard] ,component:CategoryproductComponent},
  {path :'forget-password'  , canActivate : [noAuthGuard] , component:ForgetPassordComponent},
  {path :'verify-reset-code' , canActivate : [noAuthGuard] , component:VerifyResetCodeComponent},
  {path :'reset-password' , canActivate : [noAuthGuard] , component:ResetPassowrdComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
