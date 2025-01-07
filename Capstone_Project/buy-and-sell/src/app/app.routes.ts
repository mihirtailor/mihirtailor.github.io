import { Routes } from '@angular/router';
import { ListingsPageComponent } from './components/listings-page/listings-page.component';
import { ListingDetailComponent } from './components/listing-detail/listing-detail.component';
import { ContactComponent } from './components/contact/contact.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import { MyListingsComponent } from './components/my-listings/my-listings.component';
import { NewListingComponent } from './components/new-listing/new-listing.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/listings',
    pathMatch: 'full',
  },
  {
    path: 'listings',
    component: ListingsPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'listings/:id',
    component: ListingDetailComponent,
  },
  {
    path: 'contact/:id',
    component: ContactComponent,
  },
  {
    path: 'edit-listing/:id',
    component: EditListingComponent,
  },
  {
    path: 'my-listings',
    component: MyListingsComponent,
  },
  {
    path: 'new-listing',
    component: NewListingComponent,
  },
];
