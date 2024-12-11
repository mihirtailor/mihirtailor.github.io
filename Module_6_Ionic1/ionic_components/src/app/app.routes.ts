import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'button',
    loadComponent: () =>
      import('./button/button.page').then((m) => m.ButtonPage),
  },
  {
    path: 'icon',
    loadComponent: () => import('./icon/icon.page').then( m => m.IconPage)
  },
  {
    path: 'input',
    loadComponent: () => import('./input/input.page').then( m => m.InputPage)
  },
  {
    path: 'list',
    loadComponent: () => import('./list/list.page').then( m => m.ListPage)
  },
  {
    path: 'model',
    loadComponent: () => import('./model/model.page').then( m => m.ModelPage)
  },
  {
    path: 'alert',
    loadComponent: () => import('./alert/alert.page').then( m => m.AlertPage)
  },
  {
    path: 'toast',
    loadComponent: () => import('./toast/toast.page').then( m => m.ToastPage)
  },
];
