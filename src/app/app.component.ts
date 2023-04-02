import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm!: NgForm;
  defaultQuestion = 'teacher';
  answer = '';
  genders=['male', 'female'];
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signUpForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // })
    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }
  // submit(form: NgForm){
  //   console.log(form)
  // }

  submit(){
    console.log(this.signUpForm)
  }
}
