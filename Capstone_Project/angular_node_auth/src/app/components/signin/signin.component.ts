import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';

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

  dataService: DataService = inject(DataService);

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

  onSubmit(data: any) {
    console.log(data);
    if (data.form.valid) {
      this.dataService.signIn(data.form.value).subscribe((result) => {
        console.log(result);
      });
    }
  }

  socialSignIn(platform: string) {
    // Implement social sign-in logic for each platform
    console.log(`Signing in with ${platform}`);
  }
}
