import { Routes } from '@angular/router';
import { DefaultLayout } from './Components/layout/default-layout/default-layout';
import { About } from './Pages/about/about';
import { Overview } from './Pages/overview/overview';
import { Projects } from './Pages/projects/projects';
import { ContactMe } from './Pages/contact-me/contact-me';

export const routes: Routes = [
  {
    path: '', component: DefaultLayout, children: [
      { path: '', redirectTo: 'a-propos', pathMatch: 'full' },
      { path: 'a-propos', component: About },
      { path: 'overview', component: Overview },
      { path: 'projects', component: Projects },
      { path: 'contact', component: ContactMe },
    ],
  },
  { path: '**', redirectTo: 'a-propos' },
];
