import { Component } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
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
  form = new FormArray([this.createNewPlayer()], [Validators.minLength(3), validateUnique]);

  constructor(private navigation: NavController, private state: State) {
  }

  createNewPlayer(): FormControl {
    return new FormControl('', [Validators.required]);
  }

  onAdd(): void {
    this.form.push(this.createNewPlayer());
  }

  onRemove(i: number): void {
    this.form.removeAt(i);
  }

  onSubmit(): Promise<boolean> {
    this.state.set({ names: [...this.form.value] });
    return this.navigation.navigateForward('/step/2');
  }
}
