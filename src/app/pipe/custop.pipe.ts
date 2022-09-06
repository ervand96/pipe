import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pricePipe'
})

export class PricePipe implements PipeTransform {
  transform(value: number, pipeType: string, result: string = 'more' || 'less', numbers: number)  {
    if (result === 'more') {
      value = value / 1000;
      return pipeType + value.toFixed(numbers);
    } else {
      return pipeType + value.toFixed(numbers);
    }
  }
}
