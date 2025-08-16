import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  login: FormGroup;

  constructor(private fb : FormBuilder){
    this.login = this.fb.group({
      email: [''],
      password: [''],
      buyerId: [''],
      adminId: ['', [Validators.required]]
    })
  }
 
}
