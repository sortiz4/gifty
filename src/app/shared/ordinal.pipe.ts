import { Pipe, PipeTransform } from '@angular/core';

const suffix = ['th', 'st', 'nd', 'rd'];

@Pipe({
  name: 'ordinal',
})
export class OrdinalPipe implements PipeTransform {
  transform(n: number): string {
    const m = n % 100;
    return n + (suffix[(m - 20) % 10] ?? suffix[m] ?? suffix[0]);
  }
}
