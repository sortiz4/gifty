import { Component } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StepService } from '../step.service';

function uniqueValidator(form: FormArray): { unique: boolean } | null {
  return new Set(form.value).size !== form.value.length ? (
    { unique: false }
  ) : (
    null
  );
}

@Component({
  selector: 'step-1',
  templateUrl: 'step-1.page.html',
  styleUrls: ['../../shared/shared.page.scss'],
})
export class Step1Page {
  form: FormArray;

  constructor(private router: Router, private stepService: StepService) {
    this.form = new FormArray([this.newPlayer()], [Validators.minLength(3), uniqueValidator]);
  }

  newPlayer(): FormControl {
    return new FormControl('', [Validators.required]);
  }

  onAdd(): void {
    this.form.push(this.newPlayer());
  }

  onRemove(i: number): void {
    this.form.removeAt(i);
  }

  onSubmit(form: string[]): void {
    this.stepService.names = Array.from(form);
    this.router.navigate(['/step/2']);
  }
}
