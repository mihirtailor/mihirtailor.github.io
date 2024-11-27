import { Routes } from '@angular/router';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { EmployeesComponent } from './employees/employees.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
  {
    path: 'add_employee',
    component: ReactiveformComponent,
  },
  {
    path: 'employees',
    component: EmployeesComponent,
  },
  {
    path: 'employees/:id',
    component: EmployeesComponent,
  },
  {
    path: '',
    redirectTo: 'employees',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  },
];
