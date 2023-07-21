import { Routes } from '@angular/router';
import { DefaultLayout } from './layouts/default/default.layout';
import { HomePage } from './pages/home/home.page';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayout,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomePage,
      },
    ],
  },
];
