import { Component } from '@angular/core';
import {FormControl ,FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor( private _AuthService: AuthService , private _router :Router){}

  apiErrorMessage:string = ''
isLoading:boolean = false;
loginForm :FormGroup = new FormGroup ({
  email :new FormControl (null , [Validators.email,Validators.required]) ,
  password :new FormControl (null , [Validators.required, Validators.pattern(/^[A-Z].{5,}/)])}
)

handllogin(loginForm :FormGroup){
if(loginForm.valid){
  this.isLoading=true;
this._AuthService .login(loginForm.value).subscribe({
  next : (Response) =>{console.log(Response)
    localStorage.setItem('token',Response.token)
  this._router.navigate(['/home'])
  this._AuthService.isLoginSubgect.next (true)
  this.isLoading = false
  },
  error :(err) => {console.log(err)
    this.apiErrorMessage = err.error.message
    this.isLoading = false
  }
})
}
}


}
