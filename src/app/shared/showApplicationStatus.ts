import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showApplicationStatus',
})
export class showApplicationStatusPipe implements PipeTransform {
  transform(value: boolean): string {
    if (value === true) return 'Approved';
    else return 'In Process';
  }
}
