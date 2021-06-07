import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNameValidate]'
})
export class NameValidateDirective {

  constructor(){}
  @HostListener('blur',['$event.target'])
  nameOnly(obj:any)
  {
    var val=obj.value;
    if(val!=""){
      var addr=new RegExp("^[a-zA-Z\\s]*$");
      if(!addr.test(val)){
        return alert("Enter Valid Name")
      }
      else{
        return true
      }
      }
    }
}
