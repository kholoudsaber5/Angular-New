import { Component, Input } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';
import { CartService } from '../services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product! : Iproduct

  constructor (private _CartService :CartService , private toastr: ToastrService , private _WishlistService:WishlistService ){}
  
addToCart (id:string)
{
  this._CartService.addCartItem(id).subscribe({
    next:(response)=>{console.log(response)
      this._CartService.cartItemsNum.next(response.numOfCartItems)
      this.toastr.success('successfully add to cart', 'product Add', {
        closeButton:true,
        timeOut:3000,
        progressBar:true,
        progressAnimation:"increasing"
      });
    },
    error:(err)=>{console.log(err)}
  })
}

addToWishlist(productId:string){

  this._WishlistService.addProductToWishlist(productId).subscribe({
    next :(response)=> {console.log(response)
      this.toastr.success(response.message,"Product Added")
    },
    error :(err)=>{console.log(err)}
  })
}



}
