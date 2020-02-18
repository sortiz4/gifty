import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'start',
    loadChildren: () => import('./start/start.module').then( m => m.StartPageModule),
  },
  {
    path: 'step-1',
    loadChildren: () => import('./step-1/step-1.module').then( m => m.Step1PageModule),
  },
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {}
