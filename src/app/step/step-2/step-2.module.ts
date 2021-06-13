import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Step2Page } from './step-2.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    Step2Page,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: Step2Page }]),
    SharedModule,
  ],
})
export class Step2PageModule {}
