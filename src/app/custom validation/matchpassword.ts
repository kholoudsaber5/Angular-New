import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const passwordMtch: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const rePassword = control.get('rePassword');
  if (password && rePassword && password.value !== rePassword.value) {
    return { passwordMismatch: true };
  }
  return null;
};
