import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent {
  router = inject(ActivatedRoute);
  emp_data: EmployeeService = inject(EmployeeService);
  details: string = '';
  employees: any = [];

  constructor() {
    this.emp_data.getEmployees().subscribe((val) => {
      this.employees = val;
    });
  }

  // ngOnInit(): void {
  //   this.emp_data.getEmployees().subscribe((val) => {
  //     this.employees = val;
  //   });
  // }
}
