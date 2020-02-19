import { Component } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-1',
  templateUrl: 'step-1.page.html',
  styleUrls: ['step-1.page.scss'],
})
export class Step1Page {
  players: FormArray = new FormArray([this.newControl()]);

  newControl(): FormControl {
    return new FormControl('', [Validators.required]);
  }

  onCreate(): void {
    this.players.push(this.newControl());
  }

  onDestroy(i: number): void {
    this.players.removeAt(i);
  }
}
