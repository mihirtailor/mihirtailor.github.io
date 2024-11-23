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
    { id: 4, name: 'Mary Taylor', level: 'undergrad' },
    { id: 5, name: 'Mark Johnson', level: 'undergrad' },
  ];

  undergradsStudents = this.getUndergrads();

  // returns array of undergrad students
  getUndergrads() {
    return this.students.filter((student) => student.level === 'undergrad');
  }

  text: string = '';

  alertMessage(message: string) {
    this.text = message;
  }

  deleteStudent(id: number) {
    // find index of student with id
    const index = this.students.findIndex((student) => student.id === id);

    // remove student from array
    this.students.splice(index, 1);

    // update undergradsStudents array
    this.undergradsStudents = this.getUndergrads();
  }
}
