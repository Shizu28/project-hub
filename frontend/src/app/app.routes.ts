import { Routes } from '@angular/router';
import Home from './pages/home/home';
import { ProjectDetail } from './pages/project-detail/project-detail';
import { Profile } from './pages/profile/profile';

export const routes: Routes = [
  { path: 'projects', loadComponent: () => import('./pages/projects/projects') },
  { path: 'project/:id', component: ProjectDetail },
  { path: 'home', loadComponent: () => import('./pages/home/home') },
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'profile', component: Profile },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact') },
];
