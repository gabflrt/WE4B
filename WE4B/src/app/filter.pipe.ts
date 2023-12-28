import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], minNote: number, maxNote: number): any[] {
    if (!items) {
      return items;
    }

    return items.filter(item => {
      return item.note >= minNote && item.note <= maxNote;      
    });
  }
}
