import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { OrdinalPipe } from './ordinal.pipe';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [
    OrdinalPipe,
    PageComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    OrdinalPipe,
    PageComponent,
  ],
})
export class SharedModule {}
