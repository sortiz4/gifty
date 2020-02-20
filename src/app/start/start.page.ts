import { Component } from '@angular/core';

@Component({
  selector: 'start',
  templateUrl: 'start.page.html',
  styleUrls: ['../shared/shared.page.scss'],
})
export class StartPage {
  title: string = document.title;
}
