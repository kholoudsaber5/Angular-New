import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient : HttpClient) {
    this.getUserCart().subscribe({
      next:(response)=>{this.cartItemsNum.next(response.numOfCartItems) 
        }
     
    })
   }

//headrs :any = {token:localStorage.getItem("token")}

cartItemsNum = new BehaviorSubject<number>(0)


addCartItem (id:string):Observable<any>{
  return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/cart',
    {productId:id,

    },
    
  );
}

getUserCart ():Observable<any>{
  return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/cart",
    )

}

removeCartItem (id:string):Observable<any>
{
  return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
  )
}

cartitemsNum:number = 0 

updateCartItem (id:string,count:number):Observable<any>{
  return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    {
count:count
    },
   
  )

}


onlinePayment(cartId : any , shippingAdress:any):Observable<any>{

  return this._HttpClient.post(
    `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
    {shippingAdress:shippingAdress}
  );
}


}
