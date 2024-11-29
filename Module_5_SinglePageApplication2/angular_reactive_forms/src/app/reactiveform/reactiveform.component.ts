import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { weakPasswordValidator } from '../custom.pass.validations';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css',
})
export class ReactiveformComponent {
  route = inject(ActivatedRoute);
  employeeService = inject(EmployeeService);
  employee: Employee | undefined;

  employeeForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      weakPasswordValidator(),
    ]),
    salary: new FormControl('', [Validators.required]),
  });

  addEmployee() {
    if (this.employeeForm.valid) {
      const formValue = this.employeeForm.value;

      const employee: Employee = {
        ID: 0,
        Name: formValue.name || '',
        Age: Number(formValue.age) || 0,
        Email: formValue.email || '',
        Salary: Number(formValue.salary) || 0,
      };

      this.employeeService.addEmployee(employee).subscribe({
        next: (response) => {
          console.log('Employee added successfully', response);
          this.employeeForm.reset();
        },
        error: (error) => {
          console.log('Error adding employee', error);
        },
      });
    }
  }
}
