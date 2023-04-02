import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signUpForm!: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  get hobbies(){
    return this.signUpForm.controls['hobbies'] as FormArray;
  }

  ngOnInit(): void {
      this.signUpForm = new FormGroup({
        userData: new FormGroup({
          username: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
          email: new FormControl(null, [Validators.required, Validators.email]),
        }),
        gender: new FormControl('female'),
        hobbies: new FormArray([])
      }); 
  }
  onSubmit(){
    console.log(this.signUpForm)
  }
  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean}{
    if(this.forbiddenUsernames.indexOf(control.value) ! == -1){
      return {'nameIsForbidden': true};
    }
    return {'nameIsForbidden': false};
  }
}
