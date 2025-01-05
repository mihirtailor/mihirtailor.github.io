import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule, FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  signInForm!: FormGroup;
  loading = false;
  submitted = false;

  user = {
    email: '',
    password: '',
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false],
    });
  }

  // Convenience getter for easy access to form fields

  onSubmit(data: any) {
    console.log('Form submitted', data.form);
  }

  socialSignIn(platform: string) {
    // Implement social sign-in logic for each platform
    console.log(`Signing in with ${platform}`);
  }
}
