import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username : ['', [Validators.required]],
    password : ['', [Validators.required, Validators.minLength(5)]]
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onLogin() {

    // Se verifica que el formulario sea correcto
    if (this.loginForm.invalid) return;  

    // obtener los datos del formulario
    const formValue = this.loginForm.value;
    
    console.log(formValue);
  }

  getErrorMessage(field: string) {
    let message = '';
    var form = this.loginForm.get(field);
    if (form != null) {
      if (form.hasError('required')) {
        message = 'Campo requerido';
      } else if (form.hasError('minlength')) {
        message = 'El mínimo de caracteres son 5';
      }
    }
    return message;
  }

  isValidField(field: string) {
    var form = this.loginForm.get(field);
    var flag = false;
    if (form != null) {
      flag = form.touched || form.dirty && !form.valid
    }

    return flag;
  }

}
