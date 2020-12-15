import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-step-page',
  templateUrl: './step-page.component.html',
  styleUrls: ['./step-page.component.scss'],
})
export class StepPageComponent {
  step = 0;

  get nextStep(): number {
    return this.step + 1;
  }

  get prevStep(): number {
    return this.step - 1;
  }

  get defaultHref(): string {
    switch (this.step) {
      case 1:
        return '/';
      case 2:
        return '/step/1';
    }
  }

  constructor(private router: Router) {
    this.router
      .events
      .subscribe(
        event => {
          if (event instanceof NavigationEnd) {
            const fragments = event.url.split('/').slice(1);
            const [path, step] = [fragments[0], +fragments[1]];
            if (path === 'step' && !Number.isNaN(step)) {
              this.step = step;
            } else {
              this.step = 0;
            }
          }
        }
      );
  }
}
