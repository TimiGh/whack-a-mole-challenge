import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'whack-a-mole',
    pathMatch: 'full',
  },
  {
    path: 'whack-a-mole',
    loadComponent: () => import('./pages/playground/playground.component').then((c) => c.PlaygroundComponent)
  },
  {
    path: 'leaderboard',
    loadComponent: () => import('./pages/leaderboard/leaderboard.component').then((c) => c.LeaderboardComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then((c) => c.NotFoundComponent)
  }
];
