import { Route } from '@angular/router';
import { MainComponent } from '../pages/main/main.component';

export const appRoutes: Route[] = [
  {
    path: 'ngxs',
    loadChildren: () => import('ngxs/Routes').then((m) => m!.appRoutes),
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
    component: MainComponent,
  },
];
