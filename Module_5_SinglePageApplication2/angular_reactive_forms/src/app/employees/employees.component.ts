import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent {
  router = inject(ActivatedRoute);

  employees = [
    {
      id: 1,
      name: 'John',
      age: 20,
      email: 'john@gmail.com',
      salary: 1000,
    },
    {
      id: 2,
      name: 'Jane',
      age: 21,
      email: 'jane@gmail.com',
      salary: 2000,
    },
    {
      id: 3,
      name: 'Jack',
      age: 22,
      email: 'jack@gmail.com',
      salary: 3000,
    },
    {
      id: 4,
      name: 'Jill',
      age: 23,
      email: 'jill@gmail.com',
      salary: 4000,
    },
    {
      id: 5,
      name: 'Joe',
      age: 24,
      email: 'joe@gmail.com',
      salary: 5000,
    },
  ];
}
