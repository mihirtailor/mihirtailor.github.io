import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Listing } from '../../type/data-type';
import { fakeListings } from '../../data/fake-data';

@Component({
  selector: 'app-listing-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './listing-detail.component.html',
  styleUrl: './listing-detail.component.css',
})
export class ListingDetailComponent implements OnInit {
  listing!: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find((listing) => listing.id === id);
  }
}
