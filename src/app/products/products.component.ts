import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { Iproduct } from '../interfaces/iproduct';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
 



export class ProductsComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    navSpeed: 700,
    navText: ['prev', 'next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  };






  productId: string | null = null;

  productDetails?: Iproduct;
  toastr: any;
  constructor(private _ActivatedRoute: ActivatedRoute, private _productService: ProductService, private _CartService: CartService, private _taaster: ToastrService) { }


  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params) => { this.productId = params.get("id"); });

    if (this.productId != null) {
      this._productService.getProductById(this.productId).subscribe({
        next: (Response) => {
          this.productDetails = Response.data;
          console.log(this.productDetails);
        },
        error: (err) => { console.log(err); }
      });
    }

  }



  addToCart(id: string) {
    this._CartService.addCartItem(id).subscribe({
      next: (response) => {
        console.log(response);
        this._CartService.cartItemsNum.next(response.numOfCartItems);
        this.toastr.success('successfully add to cart', 'product Add', {
          closeButton: true
        });
      },
      error: (err) => { console.log(err); }
    });
  }




}
