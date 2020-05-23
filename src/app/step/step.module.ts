import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Step0Page } from './step-0/step-0.page';
import { Step1Page } from './step-1/step-1.page';
import { Step2Page } from './step-2/step-2.page';
import { StepPageComponent } from './step-page/step-page.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '0',
        component: Step0Page,
      },
      {
        path: '1',
        component: Step1Page,
      },
      {
        path: '2',
        component: Step2Page,
      },
    ],
  },
];

@NgModule({
  declarations: [
    Step0Page,
    Step1Page,
    Step2Page,
    StepPageComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
})
export class StepPageModule {}
