import { Component, OnInit } from '@angular/core';
import { Listing } from '../../type/data-type';
import { fakeListings } from '../../data/fake-data';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listings-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './listings-page.component.html',
  styleUrl: './listings-page.component.css',
})
export class ListingsPageComponent implements OnInit {
  listings: Listing[] = [];

  constructor() {}

  ngOnInit(): void {
    this.listings = fakeListings;
  }
}
