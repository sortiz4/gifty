import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  @Input()
  title: string;

  constructor(private element: ElementRef<HTMLElement>) {
  }

  ngOnInit(): void {
    const source = this.element.nativeElement;
    const target = source.parentElement;

    while (source.firstChild) {
      target.insertBefore(source.firstChild, source);
    }

    source.remove();
  }
}
