import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';


import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BrandsComponent } from './brands/brands.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ForgetPassordComponent } from './forget-passord/forget-passord.component';
import { VerifyResetCodeComponent } from './verify-reset-code/verify-reset-code.component';
import { ResetPassowrdComponent } from './reset-passowrd/reset-passowrd.component';
import { ProductComponent } from './product/product.component';

import { HomeMainSliderComponent } from './home-main-slider/home-main-slider.component';
import { HomeCategoriesSliderComponent } from './home-categories-slider/home-categories-slider.component';
import { AuthInterceptor } from './services/interceptors/auth.interceptor';
import { ShippingAdressComponent } from './shipping-adress/shipping-adress.component';
import { OrdersComponent } from './orders/orders.component';
import { AddEGPPipe } from './pips/add-egp.pipe';
import { SearchPipe } from './pips/search.pipe';
import { ToastrModule } from 'ngx-toastr';
import { CategoryproductComponent } from './categoryproduct/categoryproduct.component';
import { productDetailsComponent } from './product-details/product-details.component';

import { LoadingComponent } from './loading/loading.component';
import { WishlistComponent } from './wishlist/wishlist.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
   
    ProductsComponent,
    CategoriesComponent,
    
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    NotfoundComponent,
    BrandsComponent,
    ForgetPassordComponent,
    VerifyResetCodeComponent,
    ResetPassowrdComponent,
    ProductComponent,
    ProductsComponent,
    CategoriesComponent,
    
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    NotfoundComponent,
    BrandsComponent,
    ForgetPassordComponent,
    VerifyResetCodeComponent,
    ResetPassowrdComponent,
    ProductComponent,
    
    HomeMainSliderComponent,
    HomeCategoriesSliderComponent,
    ShippingAdressComponent,
    OrdersComponent,
    AddEGPPipe,
    SearchPipe,
    CategoryproductComponent,
    
    HomeMainSliderComponent,
    HomeCategoriesSliderComponent,
    ShippingAdressComponent,
    OrdersComponent,
    AddEGPPipe,
    SearchPipe,
    CategoryproductComponent,
  productDetailsComponent,
 
  LoadingComponent,
  WishlistComponent]
    ,



  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    ToastrModule.forRoot()
   
   
    
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass : AuthInterceptor,
    multi :true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
