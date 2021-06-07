import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appAddressValidate]'
})
export class AddressValidateDirective {

  constructor(){}
  @HostListener('blur',['$event.target'])
  addressValidate(obj:any)
  {
    var val=obj.value;
    if(val!=""){
      var addr=new RegExp("^[a-zA-Z0-9\\s,'-/:().,]*$");
      if(!addr.test(val)){
        return alert("Enter Valid Address")
      }
      else{
        return true
      }
      }
    }

}
