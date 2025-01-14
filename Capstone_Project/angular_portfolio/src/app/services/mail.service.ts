import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  constructor() {}

  http: HttpClient = inject(HttpClient);

  sendMail(data: any) {
    return this.http.post('http://localhost:4000/sendemail/', data);
  }
}
