import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { State } from '../../services/state.service';

enum Mode {
  Alpha,
  Bravo,
  Charlie,
}

function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

@Component({
  selector: 'app-step-2',
  templateUrl: './step-2.page.html',
  styleUrls: ['./step-2.page.scss'],
})
export class Step2Page implements OnInit {
  mode: Mode;
  sender: string;
  receiver: string;
  senderNames: string[];
  receiverNames: string[];

  get isAlpha(): boolean {
    return this.mode === Mode.Alpha;
  }

  get isBravo(): boolean {
    return this.mode === Mode.Bravo;
  }

  get isCharlie(): boolean {
    return this.mode === Mode.Charlie;
  }

  constructor(private navigation: NavController, private state: State) {
  }

  ngOnInit(): void {
    this.mode = Mode.Alpha;
    this.sender = void 0;
    this.receiver = void 0;
    this.senderNames = [...this.state.get().names];
    this.receiverNames = [...this.state.get().names];
    this.selectNextSender();
  }

  selectNextSender(): string {
    return this.sender = this.senderNames.pop();
  }

  selectNextReceiver(): string {
    while (true) {
      const next = this.receiverNames[random(0, this.receiverNames.length - 1)];
      if (
        (this.receiverNames.length > 2 && next !== this.sender && next !== this.receiver) ||
        (this.receiverNames.length === 2 && next !== this.sender) ||
        (this.receiverNames.length < 2)
      ) {
        return this.receiver = next;
      }
    }
  }

  removeCurrentReceiver(): string {
    const i = this.receiverNames.indexOf(this.receiver);
    if (i > -1) {
      this.receiverNames.splice(i, 1);
    }
    return this.receiver;
  }

  onNextState(): Promise<boolean> {
    switch (this.mode) {
      case Mode.Alpha:
        this.mode = Mode.Bravo;
        this.selectNextReceiver();
        return Promise.resolve(true);
      case Mode.Bravo:
        if (this.senderNames.length > 0) {
          this.mode = Mode.Alpha;
          this.selectNextSender();
          this.removeCurrentReceiver();
        } else {
          this.mode = Mode.Charlie;
        }
        return Promise.resolve(true);
      case Mode.Charlie:
        return this.navigation.navigateForward('/');
    }
  }
}
