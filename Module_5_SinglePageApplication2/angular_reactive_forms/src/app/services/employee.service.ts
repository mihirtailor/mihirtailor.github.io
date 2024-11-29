import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get('http://localhost:3006/employees/');
  }

  // implement a function called get employee by id and return the employee
  getEmployeeById(id: number) {
    return this.http.get<Employee[]>(`http://localhost:3006/employees/${id}`);
  }

  // implement a function called add employee and return the employee
  addEmployee(employee: Employee) {
    return this.http.post('http://localhost:3006/employees/', employee);
  }
}
