import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor,NG_VALUE_ACCESSOR, NG_VALIDATORS, FormGroup,FormControl, Validator, Validators,AbstractControl, ValidationErrors } from "@angular/forms";

@Component({
  selector: 'app-address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.css']
})
export class AddressInfoComponent implements OnInit {

public addressForm: FormGroup = new FormGroup({
  addressLine: new FormControl("",[Validators.required]),
  areacode: new FormControl('', [Validators.required, Validators.maxLength(5)])
});
  constructor() { }

  ngOnInit() {
  }

}