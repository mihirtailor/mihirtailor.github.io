import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  http: HttpClient = inject(HttpClient);

  constructor() {}

  uploadImage(data: any) {
    return this.http.post('http://localhost:3000/upload', data);
  }
}
