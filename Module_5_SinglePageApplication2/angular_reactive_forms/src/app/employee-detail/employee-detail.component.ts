import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-detail.component.html',
})
export class EmployeeDetailComponent implements OnInit {
  route = inject(ActivatedRoute);
  employeeService = inject(EmployeeService);
  employee: Employee | undefined;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.loadEmployee(id);
    });
  }

  loadEmployee(id: number) {
    this.employeeService.getEmployeeById(id).subscribe({
      next: (data: Employee[]) => {
        this.employee = data[0];
        console.log('Employee loaded:', this.employee);
      },
    });
  }
}
