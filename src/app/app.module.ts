import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'step',
    loadChildren: () => import('./step/step.module').then(m => m.StepPageModule),
  },
  {
    path: '',
    redirectTo: '/step/0',
    pathMatch: 'full',
  },
];

@NgModule({
  bootstrap: [
    AppComponent,
  ],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true }),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
})
export class AppModule {}
