import { Component } from '@angular/core';
import { Student } from '../../interfaces/student';
import { SchoolService } from '../../services/school.service';

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent {
  students: Student[] = [];

  undergradsStudents = this.getUndergrads();

  constructor(private schoolService: SchoolService) {}

  // use ngOnInit hook to call getStudents method from SchoolService
  ngOnInit() {
    this.schoolService.getStudents().subscribe((response) => {
      this.students = response;
      this.undergradsStudents = this.getUndergrads();
    });
  }

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
