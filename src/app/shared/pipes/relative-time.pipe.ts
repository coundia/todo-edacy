import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relativeTime'
})
export class RelativeTimePipe implements PipeTransform {

  transform(seconds: number): string {
    if(seconds < 15){
      return 'a few seconds';
    }else if (seconds < 60){
      return 'less than a minute ago';
    }else if (seconds < 7200){
      return 'less than a hour ago';
    }else{
      return 'more than a hour';
    }
  }

}
