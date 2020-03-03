import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'step-page',
  templateUrl: './step-page.component.html',
  styleUrls: ['./step-page.component.scss'],
})
export class StepPageComponent implements OnInit {
  @ViewChild('content', { static: true }) content: TemplateRef<Element>;

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

  constructor(private router: Router, private viewContainer: ViewContainerRef) {
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

  ngOnInit(): void {
    this.viewContainer.createEmbeddedView(this.content);
  }
}
