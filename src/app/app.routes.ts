import { Routes } from '@angular/router';
import { DefaultLayout } from './Components/layout/default-layout/default-layout';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayout,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      {
        path: 'overview',
        loadComponent: () => import('./Pages/overview/overview').then((m) => m.Overview),
      },
      {
        path: 'a-propos',
        loadComponent: () => import('./Pages/about/about').then((m) => m.About),
      },
      {
        path: 'projects',
        loadComponent: () => import('./Pages/projects/projects').then((m) => m.Projects),
      },
      {
        path: 'contact',
        loadComponent: () => import('./Pages/contact-me/contact-me').then((m) => m.ContactMe),
      },
    ],
  },
  { path: '**', redirectTo: 'overview' },
];
