import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor,NG_VALUE_ACCESSOR, NG_VALIDATORS, FormGroup,FormControl, Validator, Validators,AbstractControl, ValidationErrors } from "@angular/forms";
@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {

public basicInfoForm: FormGroup = new FormGroup(
  {
fname: new FormControl("", [Validators.required]),
email: new FormControl("",[Validators.required])
});
  constructor() { }

  ngOnInit() {
  }

}