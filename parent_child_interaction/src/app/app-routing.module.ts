import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'students',
    component: StudentsComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  /// default route
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  // wildcard route
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
