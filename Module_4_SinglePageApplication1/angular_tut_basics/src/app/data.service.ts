import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getPersons(): Person[] {
    return this.persons;
  }

  persons: Person[] = [
    {
      id: 1,
      firstName: 'Bob',
      lastName: 'Marley',
    },
    {
      id: 2,
      firstName: 'Andy',
      lastName: 'Hogg',
    },
    {
      id: 3,
      firstName: 'Cindy',
      lastName: 'Smith',
    },
  ];
}
