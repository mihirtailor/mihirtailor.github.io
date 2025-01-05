import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  http: HttpClient = inject(HttpClient);

  constructor() {}

  login() {}

  register() {}
}
