import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { State } from '../../services/state.service';

function validateUnique(form: FormArray): { unique: boolean } {
  if (new Set(form.value).size !== form.value.length) {
    return { unique: false };
  }
  return null;
}

@Component({
  selector: 'app-step-1',
  templateUrl: './step-1.page.html',
  styleUrls: ['./step-1.page.scss'],
})
export class Step1Page {
  form = this.formBuilder.group(
    {
      names: this.formBuilder.array([this.createName()], [Validators.minLength(3), validateUnique]),
    },
  );

  constructor(private formBuilder: FormBuilder, private navigation: NavController, private state: State) {
  }

  canAdd(i: number): boolean {
    return i === this.getNames().length - 1;
  }

  canRemove(): boolean {
    return this.getNames().length > 1;
  }

  createName(): FormControl {
    return this.formBuilder.control('', [Validators.required]);
  }

  getControls(): AbstractControl[] {
    return this.getNames().controls;
  }

  getNames(): FormArray {
    return this.form.controls.names as FormArray;
  }

  onAdd(): void {
    this.getNames().push(this.createName());
  }

  onRemove(i: number): void {
    this.getNames().removeAt(i);
  }

  onSubmit(): Promise<boolean> {
    this.state.set({ names: [...this.form.value.names] });
    return this.navigation.navigateForward('/step/2');
  }
}
