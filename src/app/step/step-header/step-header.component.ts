import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'step-header',
  templateUrl: './step-header.component.html',
  styleUrls: ['./step-header.component.scss'],
})
export class StepHeaderComponent {
  step: number = 0;

  get nextStep() {
    return this.step + 1;
  }

  get prevStep() {
    return this.step - 1;
  }

  get defaultHref(): string {
    switch(this.step) {
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
          if(event instanceof NavigationEnd) {
            const fragments = event.url.split('/').slice(1);
            const [path, step] = [fragments[0], +fragments[1]];
            if(path === 'step' && !Number.isNaN(step)) {
              this.step = step;
            } else {
              this.step = 0;
            }
          }
        }
      );
  }
}
