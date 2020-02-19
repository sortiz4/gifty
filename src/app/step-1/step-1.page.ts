import { Component } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-1',
  templateUrl: 'step-1.page.html',
  styleUrls: ['step-1.page.scss'],
})
export class Step1Page {
  form: FormArray = new FormArray([this.newPlayer()], [Validators.minLength(3)]);

  newPlayer(): FormControl {
    return new FormControl('', [Validators.required]);
  }

  onCreate(): void {
    this.form.push(this.newPlayer());
  }

  onDestroy(i: number): void {
    this.form.removeAt(i);
  }

  onSubmit(form: string[]): void {}
}
