import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  cities=['hyderabad','bangalore','chennai','delhi']
  firstName:string='';
  lastName:string='';
  middleName:string='';
  mobileNumber:string='';
  emailAddress:string='';
  dateOfBirth:any;
  place:any;
  address:string='';
  formDetailsArray=[];
  gender:any;
  submitted:boolean=false;
  formValuesInArray: any = []
  zipcode:any;
  onSubmit(formObject: any)
  {
    this.submitted=true;
    console.log(formObject)
    this.formValuesInArray = [formObject];
    // if (formObject) {
    //   Object.keys(formObject).forEach(formKey => {
    //     this.formValuesInArray.push(formObject[formKey])
    //   })
    // }
    console.log('Form in array',this.formValuesInArray)
  }
  constructor() { 
   
  }

  ngOnInit(): void {
  }

}
