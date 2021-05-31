import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appEmailOnly]'
})
export class EmailOnlyDirective {

  constructor(){}
  @HostListener('blur',['$event.target'])
  numberonly(obj:any)
  {
    var val=obj.value;
    if(val!=""){
      var addr=new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
      if(!addr.test(val)){
        return alert("Enter valid email")
      }
      else{
        return true
      }
      }
    }
}
