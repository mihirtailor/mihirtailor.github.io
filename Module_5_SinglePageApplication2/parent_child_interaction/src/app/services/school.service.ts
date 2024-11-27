import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../interfaces/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  // api endpoint for school database
  private _schoolURL = 'http://localhost:3000/';

  constructor(private httpInstance: HttpClient) {}

  // we want an Observable object that will return an array of Students
  getStudents(): Observable<Student[]> {
    return this.httpInstance.get<Student[]>(this._schoolURL + 'students');
  }
}
