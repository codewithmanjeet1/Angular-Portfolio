import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: string): any {
    if (value) {
      const datepipe: DatePipe = new DatePipe('en-US');
      console.log(DatePipe);
      const untime = new Date(Number(value));
      console.log(untime);
      const mypipe = datepipe.transform(untime, 'shortTime', 'AU');
      console.log(mypipe);
      return mypipe ;
    }
  }

}
