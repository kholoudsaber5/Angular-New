import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forget-passord',
  templateUrl: './forget-passord.component.html',
  styleUrls: ['./forget-passord.component.css']
})
export class ForgetPassordComponent {

  constructor (private _AuthService : AuthService ,private _router:Router){}

  apiErrorMessage :string ='' ;
  isLoading :boolean = false ;

  forgetPasswordForm :FormGroup =new FormGroup(
    { 
      email: new FormControl (null, [Validators.email,Validators.required])
    }
  )




  handlForget( form:FormGroup)
{

  this.isLoading = true
this._AuthService.forgetPassword(form.value).subscribe({
  next : (Response) => {console.log(Response)
    this._router.navigate(["/verify-reset-code"])
    this.isLoading = false
  },
  error : (err) => { console.log (err)
    this.apiErrorMessage = err.error.message
    this.isLoading = false
  }
})
}



}
