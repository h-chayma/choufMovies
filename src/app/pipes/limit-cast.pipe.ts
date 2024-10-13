import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitCast'
})
export class LimitCastPipe implements PipeTransform {

  transform(cast: any[], limit: number): any[] {
    return cast.slice(0, limit);
  }
}
