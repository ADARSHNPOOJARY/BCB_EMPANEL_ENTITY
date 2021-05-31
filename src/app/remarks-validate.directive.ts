import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appRemarksValidate]'
})
export class RemarksValidateDirective {

  @HostListener('blur',['$event.target'])
  remarksValidate(obj:any)
  {
    var val=obj.value;
    if(val!=""){
      var addr=new RegExp("^[a-zA-Z0-9\\s,'-/:().,]*$");
      if(!addr.test(val)){
        return alert("Enter Valid Remarks")
      }
      else{
        return true
      }
      }
    }

}
