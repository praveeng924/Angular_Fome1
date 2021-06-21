import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('form')signUpForm:NgForm;
  defaultquestion='teacher';
  addr="";
  submitter=false;
   userobject={
    username:'',
    email:'',
    gender:'',
    secretquestion:'',
    answer:''

  }
  genders=['male','female'];
  suggestUsername() {
    const suggestedName = 'HardWork';
    this.signUpForm.form.patchValue({
      userData:{
        username:suggestedName
      }
    })
   
  }
  onSubmit(form:NgForm)
  {
    this.submitter=true;
    console.log(this.signUpForm);
    this.userobject.username=this.signUpForm.value.userData.username;
    this.userobject.email=this.signUpForm.value.userData.email;
    this.userobject.gender=this.signUpForm.value.gender;
    this.userobject.secretquestion=this.signUpForm.value.secret;
    this.userobject.answer=this.signUpForm.value.address;

    this.signUpForm.reset();




  }
}
