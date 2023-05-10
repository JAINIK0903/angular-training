import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mtoCm',
})
export class FilterPipe implements PipeTransform {
  transform(value: number, ...args: number[]) {
    return value * 100;
  }
}
