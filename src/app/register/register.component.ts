import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { passwordMtch } from '../custom validation/matchpassword';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private authService: AuthService, private _router: Router) {}

  isLoading = false;
  apiErrorMessage: string = '';

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z].{5,}$/)]),
    rePassword: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z].{5,}$/)]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
  }, { validators: passwordMtch });

  handleRegister(regForm: FormGroup) {
    if (this.registerForm.valid) {
      this.isLoading = true;
      this.authService.register(regForm.value).subscribe({
        next: (response) => {
          console.log(response);
          this.isLoading = false;
          this._router.navigate(['/login']);
        },
        error: (err) => {
          this.isLoading = false;
          this.apiErrorMessage = err.error.message;
        }
      });
    }
  }
}
