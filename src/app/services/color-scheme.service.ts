import { Injectable } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { SystemView } from './system-view.service';

@Injectable({
  providedIn: 'root',
})
export class ColorScheme {
  private readonly color = matchMedia('(prefers-color-scheme: dark)');
  private colorSchemeEvent: Subscription;

  get isDark(): boolean {
    return this.color.matches;
  }

  get isLight(): boolean {
    return !this.isDark;
  }

  constructor(private systemView: SystemView) {
  }

  start(): void {
    this.synchronize();
    this.colorSchemeEvent = fromEvent(this.color, 'change').subscribe(() => this.synchronize());
  }

  stop(): void {
    this.colorSchemeEvent.unsubscribe();
    this.synchronize();
  }

  synchronize(): void {
    if (this.isLight) {
      this.systemView.changeToLightTheme();
    } else {
      this.systemView.changeToDarkTheme();
    }
  }
}
