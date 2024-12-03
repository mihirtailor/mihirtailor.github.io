import { Routes } from '@angular/router';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { EmployeesComponent } from './employees/employees.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

export const routes: Routes = [
  {
    path: 'add_employee',
    component: ReactiveformComponent,
  },
  {
    path: 'add_employee/:id',
    component: ReactiveformComponent,
  },
  {
    path: 'employees',
    component: EmployeesComponent,
  },
  {
    path: 'employees/:id',
    component: EmployeeDetailComponent,
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
