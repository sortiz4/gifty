import { Component } from '@angular/core';

@Component({
  selector: 'app-step-1',
  templateUrl: 'step-1.page.html',
  styleUrls: ['step-1.page.scss'],
})
export class Step1Page {
  players: string[] = [
      '',
  ];

  onCreate(): void {
    this.players.push('');
  }

  onDestroy(i: number): void {
    this.players.splice(i, 1);
  }
}
