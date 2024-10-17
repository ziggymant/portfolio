import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'experience',
    loadComponent: () => import('./pages/experience-page/experience-page.component').then(m => m.ExperiencePageComponent),
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects-page/projects-page.component').then(m => m.ProjectsPageComponent),
  },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent),
  },
];
