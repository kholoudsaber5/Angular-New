import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  isLoading :boolean = false;
  cartDetails:any;

constructor(private _CartService: CartService  ,private toastr: ToastrService ){}



  ngOnInit(): void {
    this.isLoading = true ,
    this._CartService.getUserCart().subscribe({
      next:(response)=>{this.cartDetails = response.data
        this.isLoading = false ;
      },
     
      error:(err)=>{console.log(err)
        this.isLoading = false ;
      },
    })
    
  }

  removeCartItem(id:string)
  {
    this._CartService.removeCartItem(id).subscribe({
      next:(response)=>{this.cartDetails = response.data
        this._CartService.cartItemsNum.next(response.numOfCartItems)
        this.toastr.success('successfully remove from cart', 'product remove', {
          closeButton:true
        });
      },
      error:(err)=> {console.log(err)}
    })
  }

  updateCartItem(id:string , count: number)
  {
    this._CartService.updateCartItem(id,count).subscribe({
      next:(response)=>{this.cartDetails = response.data
        this.toastr.success('successfully ', 'product add or remove', {
          closeButton:true
        });
       
      },
      error : (err) => {console.log(err)}
    })
  }

}
