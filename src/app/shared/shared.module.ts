import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { OrdinalPipe } from './ordinal.pipe';

@NgModule({
  declarations: [
    OrdinalPipe,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    OrdinalPipe,
  ],
})
export class SharedModule {}
