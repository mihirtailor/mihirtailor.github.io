import { Component, inject } from '@angular/core';
import { ContactForm } from '../../contact-form';
import { FormsModule, NgForm } from '@angular/forms';
import { MailService } from '../../services/mail.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  email = 'focustaylor99@gmail.com';
  mail: MailService = inject(MailService);
  showSuccess = false;

  contact: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  onSubmit(data: any) {
    if (data.form.status == 'VALID') {
      this.mail.sendMail(data.form.value).subscribe({
        next: (response) => {
          console.log('DATA', response);
          this.showSuccess = true;
          data.form.reset();
          setTimeout(() => (this.showSuccess = false), 3000);
        },
        error: (err) => {
          console.log('ERROR', err);
        },
      });
    }
  }
}
