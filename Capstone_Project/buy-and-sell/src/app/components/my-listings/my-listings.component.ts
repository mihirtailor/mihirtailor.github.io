import { Component } from '@angular/core';
import { Listing } from '../../type/data-type';
import { fakeListings } from '../../data/fake-data';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-listings',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './my-listings.component.html',
  styleUrl: './my-listings.component.css',
})
export class MyListingsComponent {
  listings: Listing[] = [];

  constructor() {}

  ngOnInit(): void {
    this.listings = fakeListings;
  }

  onDeleteClicked(lisgingId: string): void {
    alert(`Deleting your listing with id ${lisgingId}`);
  }
}
