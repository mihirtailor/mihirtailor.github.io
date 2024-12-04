import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../employee';
import { map } from 'rxjs/operators';

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
    this.loadEmployees();
  }

  editEmployee(emp: Employee) {
    const employeeToUpdate: Employee = {
      ID: emp.ID,
      Name: emp.Name,
      Age: emp.Age,
      Email: emp.Email,
      Salary: emp.Salary,
    };

    this.employeeService.updateEmployee(emp.ID, employeeToUpdate).subscribe({
      next: () => {
        this.loadEmployees(); // Refresh the list after update
      },
      error: (error) => {
        console.log('Error updating employee', error);
      },
    });
  }

  deleteEmployee(employee: Employee) {
    this.employeeService.deleteEmployee(employee.ID).subscribe({
      next: () => {
        this.loadEmployees(); // Refresh the list after delete
        this.details = 'Employee deleted successfully';
      },
      error: (error) => {
        this.details = 'Error deleting employee: ' + error.message;
      },
    });
  }

  private loadEmployees(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  trackByEmployeeId(index: number, employee: Employee): number {
    return employee.ID;
  }

  ngOnInit() {
    this.loadEmployees();
  }
}
