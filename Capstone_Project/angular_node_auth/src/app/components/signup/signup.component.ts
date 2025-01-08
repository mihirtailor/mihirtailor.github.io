import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  user = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  };

  dataService: DataService = inject(DataService);
  router: Router = inject(Router);

  onSubmit(data: any) {
    console.log(data);
    if (data.form.valid) {
      this.dataService.signUp(data.form.value).subscribe((result: any) => {
        console.log(result);
        if (result.error == false) {
          this.router.navigate(['signin']);
        }
      });
    }
  }
}
