import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../employee';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent {
  router = inject(ActivatedRoute);
  employeeService: EmployeeService = inject(EmployeeService);
  details: string = '';
  employees: any = [];
  employees$ = this.employeeService
    .getEmployees()
    .pipe(map((response) => response as Employee[]));

  constructor() {
    this.employeeService.getEmployees().subscribe((val) => {
      this.employees = val;
    });
  }

  editEmployee(emp: Employee) {
    const employeeToUpdate: Employee = {
      ID: emp.ID,
      Name: emp.Name,
      Age: emp.Age,
      Email: emp.Email,
      Salary: emp.Salary,
    };

    this.employeeService.updateEmployee(emp.ID).subscribe({
      next: (response) => {
        console.log('Employee updated successfully', response);
        this.employees$ = this.employeeService
          .getEmployees()
          .pipe(map((response) => response as Employee[]));
      },
      error: (error) => {
        console.log('Error updating employee', error);
      },
    });
  }

  deleteEmployee(employee: Employee) {
    this.employeeService.deleteEmployee(employee.ID).subscribe({
      next: (response) => {
        // Remove the deleted employee from the local array
        this.employees = this.employees.filter(
          (emp: Employee) => emp.ID !== employee.ID
        );
        // Optionally show a success message
        this.details = 'Employee deleted successfully';
      },
      error: (error) => {
        this.details = 'Error deleting employee: ' + error.message;
      },
    });
  }

  private loadEmployees(): Observable<Employee[]> {
    return this.employeeService
      .getEmployees()
      .pipe(map((response) => response as Employee[]));
  }

  private refreshEmployees(): void {
    this.employees$ = this.loadEmployees();
  }

  // ngOnInit(): void {
  //   this.emp_data.getEmployees().subscribe((val) => {
  //     this.employees = val;
  //   });
  // }
}
