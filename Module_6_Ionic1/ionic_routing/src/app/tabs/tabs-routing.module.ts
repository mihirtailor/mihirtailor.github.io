import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'Home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then((m) => m.HomePageModule),
          },
        ],
      },
      {
        path: 'About',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../about/about.module').then((m) => m.AboutPageModule),
          },
        ],
      },
      {
        path: 'Contact',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../contact/contact.module').then(
                (m) => m.ContactPageModule
              ),
          },
        ],
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },

  {
    path: '',
    component: TabsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
