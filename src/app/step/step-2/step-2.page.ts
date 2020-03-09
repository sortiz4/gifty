import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StepService } from '../step.service';

enum State {
  Alpha,
  Bravo,
  Charlie,
}

@Component({
  selector: 'step-2',
  templateUrl: 'step-2.page.html',
  styleUrls: ['../../shared/shared.page.scss'],
})
export class Step2Page implements OnInit {
  state: State;
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

  constructor(private router: Router, private stepService: StepService) {}

  ngOnInit(): void {
    this.state = State.Alpha;
    delete this.sender;
    delete this.receiver;
    this.senderNames = Array.from(this.stepService.names);
    this.receiverNames = Array.from(this.stepService.names);
    this.selectNextSender();
  }

  random(min: number, max: number): number {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  }

  selectNextSender(): string {
    return this.sender = this.senderNames.pop();
  }

  selectNextReceiver(): string {
    while(true) {
      const next = this.receiverNames[this.random(0, this.receiverNames.length - 1)];
      if(
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
        this.router.navigate(['/']);
        break;
    }
  }
}
