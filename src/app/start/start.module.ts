import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { StartPage } from './start.page';

const routes: Routes = [
  {
    path: '',
    component: StartPage,
  },
];

@NgModule({
  declarations: [
    StartPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
})
export class StartPageModule {}
