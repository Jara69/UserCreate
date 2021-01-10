import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excerpt'
})
export class ExcerptPipe implements PipeTransform {

  transform(value: string, pocet: number, remainder: string): string{
    return value.substring(0, 4) + remainder;

  }

}
