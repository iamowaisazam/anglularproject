import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  /**
   *
   */
  constructor(private authService:AuthService) {
    
  }

  username = new FormControl("",[
    Validators.required,
  ])

  email = new FormControl("",[
    Validators.required,
    Validators.email,
  ])

  password = new FormControl("",[
    Validators.required,
    Validators.minLength(6),
  ])

  registerForm = new FormGroup({
    username:this.username,
    email:this.email,
    password:this.password
  })

  submitLoginForm(){

    console.log('====================================');
    this.authService.registerUser(String(this.email.value),String(this.password.value));
    console.log(this.registerForm.value);
    console.log('===================================='); 
    
  }




}



