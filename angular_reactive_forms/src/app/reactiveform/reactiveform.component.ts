import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { weakPasswordValidator } from '../custom.pass.validations';

@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css',
})
export class ReactiveformComponent {
  employeeForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      weakPasswordValidator(),
    ]),
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl(''),
    salary: new FormControl(''),
    department: new FormControl(''),
  });

  addEmployee() {
    console.log(this.employeeForm);
  }
}
