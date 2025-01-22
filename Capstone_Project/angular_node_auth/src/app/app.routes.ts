import { Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './auth.guard';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  {
    path: 'details/:id',
    component: DetailsComponent,
    canActivate: [authGuard],
  },
  { path: '*', redirectTo: '/signin', pathMatch: 'full' },
];
