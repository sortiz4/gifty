import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { ColorScheme } from './services/color-scheme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isReady$: Promise<boolean>;

  constructor(private colorScheme: ColorScheme, private platform: Platform, private splashScreen: SplashScreen) {
  }

  ngOnInit(): void {
    this.isReady$ = (
      this.platform
        .ready()
        .then(() => this.onSetupView())
        .catch(() => this.onReady())
        .then(() => this.onReady())
    );
  }

  onReady(): boolean {
    return true;
  }

  onSetupView(): void {
    this.colorScheme.start();
    this.splashScreen.hide();
  }
}
