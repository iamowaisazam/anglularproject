import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  /**
   *
   */
  constructor(private authService:AuthService) {
    
    
  }

  email = new FormControl("",[
    Validators.required,
    Validators.email,
  ])

  password = new FormControl("",[
    Validators.required,
    Validators.minLength(6),
  ])

  loginForm = new FormGroup({
    email:this.email,
    password:this.password
  })

  submitLoginForm(){

    alert('asd');
    
    console.log('====================================');
    
    this.authService.loginUser(String(this.email.value),String(this.password.value));
    console.log(this.loginForm.value);

    console.log('===================================='); 

  }


}
