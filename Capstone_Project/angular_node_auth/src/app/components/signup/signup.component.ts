import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  errors: boolean = false;
  errorMessage: string = '';

  user = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
  };

  dataService: DataService = inject(DataService);
  router: Router = inject(Router);

  onSubmit(data: any) {
    if (data.form.valid) {
      this.dataService.signUp(data.form.value).subscribe({
        next: (result: any) => {
          if (result.error === false) {
            this.router.navigate(['/signin']);
          } else {
            this.errors = true;
            this.errorMessage =
              'This email address is already registered. Please use a different email.';
          }
        },
        error: (err) => {
          this.errors = true;
          this.errorMessage =
            'This email address is already registered. Please use a different email.';
          this.user.password = '';
          this.user.confirm_password = '';
        },
      });
    }
  }

  closeToast() {
    this.errors = false;
    this.errorMessage = '';
  }

  showError(message: string) {
    this.errors = true;
    this.errorMessage = message;
    setTimeout(() => {
      this.errors = false;
    }, 5000);
  }

  passwordsMatch(): boolean {
    return this.user.password === this.user.confirm_password;
  }
}
