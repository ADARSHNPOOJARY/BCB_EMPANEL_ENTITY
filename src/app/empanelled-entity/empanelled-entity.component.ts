import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscriber } from 'rxjs';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-empanelled-entity',
  templateUrl: './empanelled-entity.component.html',
  styleUrls: ['./empanelled-entity.component.css']
})
export class EmpanelledEntityComponent implements OnInit {
  myForm:FormGroup;
 
  get f(){
return this.myForm.controls
  }

  empanelArr:Array<any> = []
  valuerTypeArr:Array<any> = []
  regionArr:Array<any> = []

  empanel:any={}

  shwEdit: boolean = false;shwDelete:boolean=false;
  

  @ViewChild('panelType') panelType: ElementRef
  @ViewChild('region') region: ElementRef
  @ViewChild('name') name: ElementRef
  @ViewChild('address') address: ElementRef
  @ViewChild('mobNo') mobNo: ElementRef
  @ViewChild('email') email: ElementRef
  @ViewChild('fromDate') fromDate: ElementRef
  @ViewChild('toDate') toDate: ElementRef
  @ViewChild('remarks') remarks: ElementRef
  index:any;

  date=new Date()
  constructor(private service:ServicesService) { 

    this.service.readJsonData().subscribe(
      (response)=>{
        console.log(response)
        this.empanelArr=response["MainData"];
        this.valuerTypeArr=response["VALUER_TYPE"];
        this.regionArr=response["REGION"];
      }
    );
  }

  ngOnInit(): void {
    this.myForm=new FormGroup({
      panelType:new FormControl('',Validators.required),
      region:new FormControl('',Validators.required),
      name:new FormControl('',[Validators.required,Validators.maxLength(20)]),
      email:new FormControl('',[Validators.required,Validators.email,Validators.maxLength(20)]),
      mobNo:new FormControl('',[Validators.required,Validators.minLength(10)]),
      remarks:new FormControl('',[Validators.required,Validators.maxLength(10)]),
      address:new FormControl('',[Validators.required,Validators.minLength(3)]),
      fromDate:new FormControl('',Validators.required),
      toDate:new FormControl('',Validators.required)
    })
  }

  ngAfterViewInit() {
 
  }

  cancel(){
    this.shwEdit =  false
    this.myForm.reset()
  }
  cancelDelete() {
    this.shwDelete = false
  }

  delete(i:any) {
    this.shwDelete = true
    this.index=i
  }

  deleteEmpanel(){
    this.shwDelete=false
    this.empanelArr.splice(this.index,1)
  }

  addData(){
    this.shwEdit=true
    this.empanel.title="Add Empanel Entity"
    this.empanel.errorMsg=""
  }

editData(e:any){
  this.shwEdit=true
  this.empanel.errorMsg=""
  this.empanel.title="Edit Empanel Entity"
    this.myForm.patchValue({panelType:e.VALUER_TYPE})
    this.myForm.patchValue({region:e.REGION})
    this.myForm.patchValue({name:e.NAME})
    this.myForm.patchValue({address:e.ADDRESS})
    this.myForm.patchValue({mobNo:e.MOBILENO})
    this.myForm.patchValue({email:e.EMAIL_ID})
    this.myForm.patchValue({fromDate:e.FROM_DATE})
    this.myForm.patchValue({toDate:e.TO_DATE})
    this.myForm.patchValue({remarks:e.REMARKS})
}

  submit(){
    if (this.myForm.get("panelType")?.value == "" || this.myForm.get("panelType")?.value == undefined) {
      this.empanel.errorMsg ="SELECT PANEL TYPE"
      setTimeout(() => {
        this.panelType.nativeElement.focus()
      }, 0)
      return false
    }
    if (this.myForm.get("region")?.value  == "" || this.myForm.get("region")?.value == undefined) {
      this.empanel.errorMsg ="SELECT REGION"
      setTimeout(() => {
        this.region.nativeElement.focus()
      }, 0)
      return false
    }
    if (this.myForm.get("name")?.value  == "" || this.myForm.get("name")?.value  == undefined) {
      this.empanel.errorMsg ="ENTER NAME"
      setTimeout(() => {
        this.name.nativeElement.focus()
      }, 0)
      return false
    }
    if (this.myForm.get("address")?.value  == "" || this.myForm.get("address")?.value  == undefined) {
      this.empanel.errorMsg ="ENTER ADDRESS"
      setTimeout(() => {
        this.address.nativeElement.focus()
      }, 0)
      return false
    }
    if (this.myForm.get("mobNo")?.value  == "" || this.myForm.get("mobNo")?.value == undefined) {
      this.empanel.errorMsg ="ENTER 10 DIGIT MOBILE NO."
      setTimeout(() => {
        this.mobNo.nativeElement.focus()
      }, 0)
      return false
    }
    if (this.myForm.get("email")?.value == "" || this.myForm.get("email")?.value== undefined) {
      this.empanel.errorMsg ="ENTER EMAIL ID"
      setTimeout(() => {
        this.email.nativeElement.focus()
      }, 0)
      return false
    }
    if (this.myForm.get("fromDate")?.value == "" || this.myForm.get("fromDate")?.value == undefined) {
      this.empanel.errorMsg ="SELECT FROM DATE"
      setTimeout(() => {
        this.fromDate.nativeElement.focus()
      }, 0)
      return false
    }
    if (this.myForm.get("toDate")?.value == "" || this.myForm.get("toDate")?.value == undefined) {
      this.empanel.errorMsg ="SELECT TODATE"
      setTimeout(() => {
        this.toDate.nativeElement.focus()
      }, 0)
      return false
    }
    if (this.myForm.get("remarks")?.value=="" || this.myForm.get("remarks")?.value == undefined) {
      this.empanel.errorMsg ="ENTER REMARKS"
      setTimeout(() => {
        this.remarks.nativeElement.focus()
      }, 0)
      return false
    }
    let obj={
      ["SRNO"]:this.empanelArr.length+1,
      ["VALUER_TYPE"]:this.myForm.get("panelType")?.value,
      ["REGION"]:this.myForm.get("region")?.value,
   ["NAME"]: this.myForm.get("name")?.value,
   ["ADDRESS"]: this.myForm.get("address")?.value,
   ["MOBILENO"]: this.myForm.get("mobNo")?.value,
   ["EMAIL_ID"]: this.myForm.get("email")?.value,
   ["FROM_DATE"]: this.myForm.get("fromDate")?.value,
   ["TO_DATE"]: this.myForm.get("toDate")?.value,
   ["REMARKS"]: this.myForm.get("remarks")?.value,
    }
    this.empanelArr.push(obj)
    this.shwEdit=false
  }

}
