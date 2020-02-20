import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Step1Page } from './step-1/step-1.page';
import { Step2Page } from './step-2/step-2.page';
import { StepHeaderComponent } from './step-header/step-header.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    children: [
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
    Step1Page,
    Step2Page,
    StepHeaderComponent,
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
