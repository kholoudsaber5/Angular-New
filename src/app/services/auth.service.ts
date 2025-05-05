import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoginSubgect =  new BehaviorSubject <boolean>(localStorage.getItem("token")?true:false);
    

  constructor(private _HttpClient: HttpClient , private _router :Router) {}

  register(regForm: object):Observable<any> {
   return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signup", regForm)
  
  }
  login(loginForm: object):Observable<any> {
    return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signin", loginForm)
   
   }

   logout(){
localStorage.removeItem('token')
this._router.navigate(['/login'])
this.isLoginSubgect.next(false);
   }


   forgetPassword(forgetPasswordForm:any):Observable<any>
{
   return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",forgetPasswordForm)
}


verfyResetCode (form : any ):Observable<any>
{
  return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",form)
}


resetPassword (form : any ):Observable<any>
{
  return this._HttpClient.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword",form)
}
}