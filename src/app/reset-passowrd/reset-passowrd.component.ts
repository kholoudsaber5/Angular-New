import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-passowrd',
  templateUrl: './reset-passowrd.component.html',
  styleUrls: ['./reset-passowrd.component.css']
})
export class ResetPassowrdComponent {

  apiErrorMessage :string ='';
  isLoading :Boolean = false;

  constructor ( private _AuthService: AuthService , private _router:Router){}

  resetPasswordForm :FormGroup = new FormGroup({
    email :new FormControl (null , [Validators.required , Validators.email]),
    newPassword :new FormControl ( null , [ Validators.required , Validators.pattern(/^[A-Z].{5,}/)])
  })

  handlReset(form:FormGroup)
  {

    this.isLoading = true ;
this._AuthService.resetPassword (form.value).subscribe(
  {next:(response) =>{console.log(response)
  this._router.navigate(["/login"])
  this.isLoading = false
  },

  
 error : (err)=> { console.log(err)
  this.isLoading = false
 },
 
})
  }
}
 

 

