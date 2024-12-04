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
import { Router } from '@angular/router';

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
  router = inject(Router);
  isEditMode = false;
  employeeId: number | null = null;

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

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.isEditMode = true;
        this.employeeId = Number(params['id']);
        this.loadEmployeeData(this.employeeId);
      }
    });
  }

  loadEmployeeData(id: number) {
    this.employeeService.getEmployeeById(id).subscribe({
      next: (response: any) => {
        const employee = response[0];
        this.employeeForm.patchValue({
          name: employee.Name,
          age: employee.Age.toString(),
          email: employee.Email,
          salary: employee.Salary.toString(),
        });
      },
      error: (error) => {
        console.error('Error loading employee data:', error);
      },
    });
  }

  saveEmployee() {
    if (this.employeeForm.valid) {
      const formValue = this.employeeForm.value;
      const employee: Employee = {
        ID: this.isEditMode ? this.employeeId! : 0,
        Name: formValue.name || '',
        Age: Number(formValue.age) || 0,
        Email: formValue.email || '',
        Salary: Number(formValue.salary) || 0,
      };

      if (this.isEditMode) {
        this.employeeService.updateEmployee(employee.ID, employee).subscribe({
          next: () => {
            this.employeeService.getEmployees().subscribe(); // Refresh the data
            this.router.navigate(['/employees']);
          },
          error: (error) => {
            console.error('Error updating employee:', error);
          },
        });
      } else {
        this.employeeService.addEmployee(employee).subscribe({
          next: () => {
            this.employeeService.getEmployees().subscribe(); // Refresh the data
            this.router.navigate(['/employees']);
          },
          error: (error) => {
            console.error('Error adding employee:', error);
          },
        });
      }
    }
  }
}
