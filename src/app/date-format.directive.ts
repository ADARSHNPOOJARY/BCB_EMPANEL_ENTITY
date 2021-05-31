import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDateFormat]'
})
export class DateFormatDirective {

  @HostListener('blur',['$event.target'])
  dateFormat(obj:any)
  {
    let e = obj;
    if (e.keyCode < 47 || e.keyCode > 57) {
      e.preventDefault();
    }
    let val = e.target.value.substr(0, 10)
    let len = val.length;
    if (len < 10) {
      if (len !== 1 || len !== 3) {
        if (e.keyCode == 47) {
          e.preventDefault();
        }
      }
      if (len === 2) {
        e.target.value += '-';
      }
      if (len === 5) {
        e.target.value += '-';
      }
      return e.target.value;
    }
    else {
      return val;
    }
  }

}
