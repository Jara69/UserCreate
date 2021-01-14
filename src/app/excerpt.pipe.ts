import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excerpt'
})
export class ExcerptPipe implements PipeTransform {

  transform(value: string, pocet: number, remainder: string): string{
    let value2 = value;
    if (value2.length > pocet) {
      value2 = value2.substring(0, pocet - remainder.length);
      value2 = value2.concat(remainder);
    }
    return value2;
  }
}
