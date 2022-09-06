import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pricePipe',
})
export class PricePipe implements PipeTransform {
  transform(
    value: number,
    pipeType: string,
    result: string = 'more' || 'less',
    numbers: number
  ) {
    if (result === 'more') {
      const check = value / 1000;
      return pipeType + Number(check.toFixed(numbers)).toPrecision();
    } else {
      return pipeType + Number(value.toFixed(numbers)).toPrecision();
    }
  }
}
