import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-verify-reset-code',
  templateUrl: './verify-reset-code.component.html',
  styleUrls: ['./verify-reset-code.component.css']
})
export class VerifyResetCodeComponent {
  constructor ( private _AuthService : AuthService , private _router : Router){

  }

  apiErrorMessage :string = '';
  isLoading :boolean = false

  verifyResetCodeForm :FormGroup = new FormGroup({
    resetCode : new FormControl(null ,[Validators.required])
  })


  handlResetPassword(form:FormGroup)
  {
    this.isLoading = true
this._AuthService.verfyResetCode(form.value).subscribe(
  {next:(Response) =>{console.log(Response)
this._router.navigate(['/reset-password'])
this.isLoading = false
  }
, error : (err)=> { console.log(err)
  this.apiErrorMessage = err.error.message
  this.isLoading = false
}}
)
  }

}
