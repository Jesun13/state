import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'ngxs',
    loadChildren: () => import('ngxs/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'akita',
    loadChildren: () => import('akita/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'ngrx',
    loadChildren: () => import('ngrx/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
