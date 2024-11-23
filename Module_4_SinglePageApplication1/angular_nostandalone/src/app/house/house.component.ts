import { Component } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrl: './house.component.css',
})
export class HouseComponent {
  courses: String[] = [];
  constructor(private courseService: CourseService) {
    this.courses = courseService.getCourses();
  }
}
