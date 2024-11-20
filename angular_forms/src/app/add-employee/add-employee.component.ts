import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule, CommonModule, JsonPipe],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent {
  empDetails = {
    email: '',
    first_name: '',
    last_name: '',
    salary: 0,
    department: '',
  };

  submitEmployee(emp_form: any) {
    if (emp_form.form.status == 'VALID') {
      console.log(emp_form.form.value);
    } else {
      console.log('Invalid Form');
      console.log(emp_form);
    }
  }
}
