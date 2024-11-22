import { Component } from '@angular/core';

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent {
  students = [
    { id: 1, name: 'John Doe', level: 'undergrad' },
    { id: 2, name: 'Jane Smith', level: 'postgrad' },
    { id: 3, name: 'Bob Johnson', level: 'undergrad' },
  ];

  undergradsStudents = this.getUndergrads();

  // returns array of undergrad students
  getUndergrads() {
    return this.students.filter((student) => student.level === 'undergrad');
  }
}
