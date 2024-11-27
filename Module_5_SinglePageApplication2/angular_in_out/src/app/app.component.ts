import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { Student } from './student';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'angular_in_out';

  student: Student = {
    id: 1,
    name: 'John',
    age: 20,
  };

  childValue: string = '';

  valFromChild(val: string) {
    this.childValue = val;
    console.log('Value from Child:' + val);
  }
}
