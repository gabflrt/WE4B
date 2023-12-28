import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCity'
})

export class FilterCityPipe implements PipeTransform {
  transform(items: any[], cityName: string): any[] {
    if (!items || !cityName) {
      return items;
    }

    return items.filter(item => item.city.toLowerCase().includes(cityName.toLowerCase()));
  }
}

