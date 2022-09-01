import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isReady$: Promise<boolean>;

  constructor(private platform: Platform) {
  }

  ngOnInit(): void {
    this.isReady$ = (
      this.platform
        .ready()
        .catch(() => this.onReady())
        .then(() => this.onReady())
    );
  }

  onReady(): boolean {
    return true;
  }
}
