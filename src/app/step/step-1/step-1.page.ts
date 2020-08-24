import { Component } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Bowl } from '../../services/bowl.service';

function uniqueValidator(form: FormArray): { unique: boolean } | null {
  return new Set(form.value).size !== form.value.length ? (
    { unique: false }
  ) : (
    null
  );
}

@Component({
  selector: 'app-step-1',
  templateUrl: 'step-1.page.html',
  styleUrls: ['step-1.page.scss'],
})
export class Step1Page {
  form: FormArray;

  constructor(private bowl: Bowl, private router: Router) {
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
    this.bowl.names = Array.from(form);
    this.router.navigate(['/step/2']);
  }
}
