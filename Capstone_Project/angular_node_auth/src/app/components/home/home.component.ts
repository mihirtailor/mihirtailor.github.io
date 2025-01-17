import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../../housing-location';
import { CommonModule } from '@angular/common';
import { HousingService } from '../../services/housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  router: Router = inject(Router);
  housingService: HousingService = inject(HousingService);

  housingLocationList: HousingLocation[] = [];

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    console.log(this.housingLocationList);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['signin']);
  }
}
