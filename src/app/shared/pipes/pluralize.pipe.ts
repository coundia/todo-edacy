import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralize'
})
export class PluralizePipe implements PipeTransform {

  transform(count: number, s:string ,p:string): unknown {
    return `${count} ${count <= 1 ? s:p}`;
  }

}
