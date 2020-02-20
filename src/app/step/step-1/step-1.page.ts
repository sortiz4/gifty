import { Component } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'step-1',
  templateUrl: 'step-1.page.html',
  styleUrls: ['step-1.page.scss'],
})
export class Step1Page {
  form: FormArray = new FormArray([this.newPlayer()], [Validators.minLength(3)]);

  constructor(private router: Router) {}

  newPlayer(): FormControl {
    return new FormControl('', [Validators.required]);
  }

  onCreate(): void {
    this.form.push(this.newPlayer());
  }

  onDestroy(i: number): void {
    this.form.removeAt(i);
  }

  onSubmit(form: string[]): void {
    this.router.navigate(['/step/2']);
  }
}
