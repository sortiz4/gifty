import { Component } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-step',
  templateUrl: 'step.page.html',
  styleUrls: ['step.page.scss'],
})
export class StepPage {
  get step() {
    return this.sharedService.step;
  }

  get nextStep() {
    return this.sharedService.nextStep;
  }

  get prevStep() {
    return this.sharedService.prevStep;
  }

  constructor(private sharedService: SharedService) {}
}
