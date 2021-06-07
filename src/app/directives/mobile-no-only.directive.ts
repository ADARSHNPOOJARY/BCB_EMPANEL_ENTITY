import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appMobileNoOnly]'
})
export class MobileNoOnlyDirective {

  constructor() { }
  @HostListener('blur',['$event.target'])
  numberonly(obj:any)
  {
    var val=obj.value;
    if(val!=""){
      var addr=new RegExp("^[1-9]{1}[0-9]{9}$");
      if(!addr.test(val)){
        obj.value=""
        return alert("Enter 10 digit mobile number")
      }
      else{
        return true
      }
      }
    }
    
}
