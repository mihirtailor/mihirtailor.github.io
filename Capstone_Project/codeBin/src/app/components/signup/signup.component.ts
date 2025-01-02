import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  errorMessage: string = '';
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  emailExists = false;
  constructor(private authService: AuthService, private router: Router) {}
  user = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  checkEmailExists() {
    if (this.user.email) {
      this.authService.checkEmailExists(this.user.email).subscribe((exists) => {
        this.emailExists = exists;
      });
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.errorMessage = '';
      this.authService
        .registerUser(this.user.email, this.user.password)
        .catch((error) => {
          this.errorMessage = error;
        });
    }
  }

  resetForm(form: NgForm) {
    form.resetForm();
    this.user = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }
}
