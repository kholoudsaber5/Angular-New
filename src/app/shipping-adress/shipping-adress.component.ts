import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shipping-adress',
  templateUrl: './shipping-adress.component.html',
  styleUrls: ['./shipping-adress.component.css']
})
export class ShippingAdressComponent  implements OnInit{

  shippingAdressForm : FormGroup = new FormGroup({
    details : new FormControl (null, Validators.required),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
    city : new FormControl (null , Validators.required)
  })
  
  cartId :string | null = ""

  ngOnInit(): void {

    this._ActivatedRoute.paramMap.subscribe((params)=>{this.cartId = params.get("id")})
  }

  constructor (private _cartService:CartService , private _ActivatedRoute: ActivatedRoute){}
  
  redirectToPaymentPage(url : string)

 {

    window.location.href = url ;

  }

  handleshippingAdressForm(form:FormGroup)
  {
   this._cartService.onlinePayment(this.cartId , form.value).subscribe({
    next:(response)=> {console.log(response)
      this.redirectToPaymentPage(response.session.url)
    }
   })
  }

}
