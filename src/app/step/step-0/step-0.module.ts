import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Step0Page } from './step-0.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    Step0Page,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: Step0Page }]),
    SharedModule,
  ],
})
export class Step0PageModule {}
