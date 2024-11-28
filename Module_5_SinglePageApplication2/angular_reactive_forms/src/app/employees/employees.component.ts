import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent {
  router = inject(ActivatedRoute);
  employee_data: EmployeeService = inject(EmployeeService);
  details: string = '';

  employees = [
    {
      id: 1,
      name: 'John',
      age: 20,
      email: 'john@gmail.com',
      salary: 1000,
      description: ' John is a great Player',
    },
    {
      id: 2,
      name: 'Jane',
      age: 21,
      email: 'jane@gmail.com',
      salary: 2000,
      description: ' Jane is a great Singer',
    },
    {
      id: 3,
      name: 'Jack',
      age: 22,
      email: 'jack@gmail.com',
      salary: 3000,
      description: ' Jack is a great Actor',
    },
    {
      id: 4,
      name: 'Jill',
      age: 23,
      email: 'jill@gmail.com',
      salary: 4000,
      description: ' Jill is a great Player',
    },
    {
      id: 5,
      name: 'Joe',
      age: 24,
      email: 'joe@gmail.com',
      salary: 5000,
      description: ' Joe is a great Athlete',
    },
  ];

  constructor() {
    this.router.paramMap.subscribe((param) => {
      const emp_id = Number(param.get('id'));
      if (emp_id) {
        const selectedEmployee = this.employees.find(
          (emp) => emp.id === emp_id
        );
        if (selectedEmployee) {
          this.details = selectedEmployee.description;
        } else {
          this.details = 'Employee not found';
        }
      }
    });
  }
}
