import { Pipe, PipeTransform } from '@angular/core';

const suffix = ['th', 'st', 'nd', 'rd'];

@Pipe({
  name: 'ordinal',
})
export class OrdinalPipe implements PipeTransform {
  transform(n: number): string {
    const a = n % 100;
    const b = (a - 20) % 10;
    return `${n}${suffix[b] ?? suffix[a] ?? suffix[0]}`;
  }
}
