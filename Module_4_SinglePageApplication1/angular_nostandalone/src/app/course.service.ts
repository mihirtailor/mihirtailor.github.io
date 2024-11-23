import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private course = ['Maths', 'Science', 'English'];
  constructor() {}

  getCourses() {
    return this.course;
  }
}
