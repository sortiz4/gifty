import { Component } from '@angular/core';

@Component({
  selector: 'start',
  templateUrl: 'start.page.html',
  styleUrls: ['../step/step.page.scss'],
})
export class StartPage {
  title: string = document.title;
}
