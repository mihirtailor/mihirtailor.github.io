import { Component } from '@angular/core';
import { ContactForm } from '../../contact-form';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  email = 'focustaylor99@gmail.com';

  contact: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
