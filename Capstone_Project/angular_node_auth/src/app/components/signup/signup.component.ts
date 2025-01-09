import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
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
      this.dataService.signUp(data.form.value).subscribe((result: any) => {
        if (result.error == false) {
          this.router.navigate(['signin']);
        }
      });
    }
  }

  passwordsMatch(): boolean {
    return this.user.password === this.user.confirm_password;
  }
}
