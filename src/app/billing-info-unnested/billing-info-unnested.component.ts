import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,AbstractControl, ValidationErrors } from "@angular/forms";

@Component({
  selector: 'app-billing-info-unnested',
  templateUrl: './billing-info-unnested.component.html',
  styleUrls: ['./billing-info-unnested.component.css']
})
export class BillingInfoUnnestedComponent implements OnInit {

public nestedForm: FormGroup = new FormGroup({
  fname: new FormControl("", [Validators.required]),
  email: new FormControl("", [Validators.required, Validators.email]),
addressLine: new FormControl("", [Validators.required]),
areacode: new FormControl("", [Validators.required, Validators.maxLength(5)])
})


  constructor() { }

  ngOnInit() {
  }

public onSubmit(){
  // if(this.nestedForm.invalid){
  //   return
  // }

  console.log(" Billing Form", this.nestedForm.value);
}
}