import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Step1Page } from './step-1.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    Step1Page,
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: Step1Page }]),
    SharedModule,
  ],
})
export class Step1PageModule {}
