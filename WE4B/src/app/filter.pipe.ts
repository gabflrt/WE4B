import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], minNote: number, maxNote: number): any[] {
    if (!items || (minNote === null && maxNote === null)) {
      return items;
    }

    return items.filter(item => {
      if (minNote !== null && maxNote !== null) {
        return item.note >= minNote && item.note <= maxNote;
      } else if (minNote !== null) {
        return item.note >= minNote;
      } else if (maxNote !== null) {
        return item.note <= maxNote;
      }
      return true;
    });
  }
}
