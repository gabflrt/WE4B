import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tri'
})
export class TriPipe implements PipeTransform {

    transform(items: any[], triDirection: string): any[] | undefined {
      if (!items) {
        return items;
      }

      if (triDirection === 'default') {
        return items.sort((a, b) => a.id - b.id); // Tri par défaut
      } else if (triDirection === 'croissant') {
          return items.sort((a, b) => a.note - b.note); // Tri croissant
      } else if (triDirection === 'decroissant') {
          return items.sort((a, b) => b.note - a.note); // Tri décroissant
      }

      return undefined;
  }
}
