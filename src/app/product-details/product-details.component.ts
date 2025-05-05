import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute} from '@angular/router';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { OwlOptions } from 'ngx-owl-carousel-o';

 @Component({
   
selector:'app-product-details',
templateUrl:'./product-details.component.html',
styleUrls: ['./product-details.component.css']
 })

 export class productDetailsComponent implements OnInit {
    productId :string|null = null;
    isLoading : boolean = false
    productDetails :any ;
    customOptions: OwlOptions ={
        loop:true,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        mouseDrag:true,
        touchDrag:true,
        pullDrag:true,
        dots:true,
        navSpeed:700,
        navText:['prev','nex'],
        responsive:{
            0:{
                items:1
            },
            400:{
                items :2
            },
            740:{
                items :3
            }
        },
        nav:true
    };

    constructor(private  _ActivatedRoute : ActivatedRoute , private _ProductService :ProductService , private _CartService:CartService , private toastr: ToastrService ){}

    ngOnInit(): void {
        this.isLoading = true,
        this._ActivatedRoute.paramMap.subscribe((params)=>{console.log(params.get("id"))
            this.productId = params.get("id")
            
        })
        if(this.productId != null){
            this._ProductService.getProductById(this.productId).subscribe({
                next:(response)=>{
                    this. productDetails = response.data ;
                    this.isLoading = false;
                    console.log(this.productDetails)
                },
                error :(err)=>{console.log(err)
                    this.isLoading = false
                }
            })
        }
    }


    addToCart (id:any)
{
  this._CartService.addCartItem(id).subscribe({
    next:(response)=>{console.log(response)
      this._CartService.cartItemsNum.next(response.numOfCartItems)
      this.toastr.success('successfully add to cart', 'product Add', {
        closeButton:true
      });
    },
    error:(err)=>{console.log(err)}
  })
}
 }