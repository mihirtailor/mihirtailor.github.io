import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CommonModule } from '@angular/common';
import { User } from '../models/user';
import { JokeComponent } from './components/joke/joke.component';
import { AComponent } from './components/a/a.component';
import { B1Component } from './components/b1/b1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserProfileComponent,
    CommonModule,
    JokeComponent,
    AComponent,
    B1Component,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = [
    {
      name: 'john',
      isSingle: true,
      salary: 10000,
    },
    // {
    //   name: 'mark',
    //   isSingle: false,
    //   salary: 20000,
    // },
    // {
    //   name: 'Bob',
    //   isSingle: true,
    //   salary: 30000,
    // },
  ];

  receivedData(data: User) {
    console.log(data);
    const userIndex = this.users.findIndex((user) => user.name === data.name);
    this.users[userIndex].salary = data.newSalary;
  }

  clear() {
    this.users = [];
  }
}
