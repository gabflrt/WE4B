import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDate'
})

export class FilterDatePipe implements PipeTransform {
  transform(items: any[], minDate: String, maxDate: String): any[] {
    if (!items) {
      return items;
    }

    return items.filter(item => {
      return item.dateOfCreation >= minDate && item.dateOfCreation <= maxDate;      
    });
  }
}
