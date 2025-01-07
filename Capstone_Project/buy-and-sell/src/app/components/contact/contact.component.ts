import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fakeListings } from '../../data/fake-data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  email: string = '';
  message: string = '';
  listing!: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find((listing) => listing.id === id);
    this.message = `Hi, I'm interested in your ${this.listing.name.toLowerCase()}!`;
  }

  sendMessage(): void {
    alert('Your message has been sent!');
    this.router.navigateByUrl('/listings');
  }
}
