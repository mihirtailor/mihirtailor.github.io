import { Routes } from '@angular/router';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { EmployeesComponent } from './employees/employees.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'employees',
    pathMatch: 'full',
  },
  {
    path: 'add_employee',
    component: ReactiveformComponent,
  },
  {
    path: 'employees',
    component: EmployeesComponent,
  },
  {
    path: '**',
    redirectTo: 'employees',
  },
];
