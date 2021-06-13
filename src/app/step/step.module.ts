import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '0',
        loadChildren: () => import('./step-0/step-0.module').then(m => m.Step0PageModule),
      },
      {
        path: '1',
        loadChildren: () => import('./step-1/step-1.module').then(m => m.Step1PageModule),
      },
      {
        path: '2',
        loadChildren: () => import('./step-2/step-2.module').then(m => m.Step2PageModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
})
export class StepPageModule {}
