import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm!: NgForm
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  // submit(form: NgForm){
  //   console.log(form)
  // }

  submit(){
    console.log(this.signUpForm)
  }
}
