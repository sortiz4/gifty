import { Component } from '@angular/core';

enum State {
  Alpha,
  Bravo,
  Charlie,
}

function random(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

@Component({
  selector: 'app-step-2',
  templateUrl: 'step-2.page.html',
  styleUrls: ['step-2.page.scss'],
})
export class Step2Page {
  state: State = State.Alpha;
  sender: string;
  receiver: string;
  senderNames: string[];
  receiverNames: string[];

  get isAlpha(): boolean {
    return this.state === State.Alpha;
  }

  get isBravo(): boolean {
    return this.state === State.Bravo;
  }

  get isCharlie(): boolean {
    return this.state === State.Charlie;
  }

  constructor() {
    const names = [
      'Alpha',
      'Bravo',
      'Charlie',
      'Delta',
      'Echo',
      'Foxtrot',
      'Golf',
    ];
    this.senderNames = Array.from(names);
    this.receiverNames = Array.from(names);
    this.selectNextSender();
    this.selectNextReceiver();
  }

  selectNextSender(): string {
    return this.sender = this.senderNames.pop();
  }

  selectNextReceiver(): string {
    while(true) {
      const i = random(0, this.receiverNames.length - 1);
      const value = this.receiverNames[i];
      if(value !== this.sender && value !== this.receiver) {
        return this.receiver = value;
      }
    }
  }

  removeCurrentReceiver(): string {
    const i = this.receiverNames.indexOf(this.receiver);
    if(i > -1) {
      this.receiverNames.splice(i, 1);
    }
    return this.receiver;
  }

  onNextState(): void {
    switch(this.state) {
      case State.Alpha:
        this.state = State.Bravo;
        this.selectNextReceiver();
        break;
      case State.Bravo:
        if(this.senderNames.length > 0) {
          this.state = State.Alpha;
          this.selectNextSender();
          this.removeCurrentReceiver();
        } else {
          this.state = State.Charlie;
        }
        break;
      case State.Charlie:
        break;
    }
  }
}
