import { Component } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-step',
  templateUrl: 'step.page.html',
  styleUrls: ['step.page.scss'],
})
export class StepPage {
  get step() {
    return this.stateService.step;
  }

  get nextStep() {
    return this.stateService.nextStep;
  }

  get prevStep() {
    return this.stateService.prevStep;
  }

  constructor(private stateService: StateService) {}
}
