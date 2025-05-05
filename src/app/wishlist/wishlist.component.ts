import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';
import { Iproduct } from '../interfaces/iproduct';
import { CartService } from '../services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent  implements OnInit{
  isLoading = false;

  allWishlistProduct:Iproduct[] =[]


  constructor(private _WishlistService:WishlistService,
    private _CartService:CartService ,
     private toastr: ToastrService ,
    ){}


  ngOnInit(): void {
    this.isLoading = true;
   this.getWishListData()


  }
  getWishListData(){
    this._WishlistService.getUserWishlist().subscribe({
      next:(response)=>{console.log(response);
       
        this.allWishlistProduct = response.data ;
        this.isLoading = false;
      },
      error:(err)=>{console.log(err);
        this.isLoading = false
      }
          })
  }


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

removeFromWishList (id:string){
  this._WishlistService.removeProductFromWishList(id).subscribe({
    next:(response)=>{console.log(response);
      this.toastr.info("product removed successfully from wishlist")
      ;this.getWishListData()
    },
    error:(err)=>{console.log(err)}
  })
}


}
