import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  http: HttpClient = inject(HttpClient);
  url = 'http://localhost:3000';

  constructor() {}

  signIn(data: {}) {
    return this.http.post(this.url + '/login', data);
  }

  signUp(data: {}) {
    return this.http.post(this.url + '/register', data);
  }
}
