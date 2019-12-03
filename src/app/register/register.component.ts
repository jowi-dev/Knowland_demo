import { Component, OnInit } from '@angular/core';
import {User} from '../../User';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User ={
    name:'',
    password:'',
    passwordConfirm:''
  }

  errors = {
    empty: "Field is required.",
    mismatch: "Passwords do not match."
  }
  valid:boolean = false;
  usernameError: string = '';
  passwordError: string = '';
  passwordConfirmError: string = '';

  success: string= "User Created";

  constructor() { }

  ngOnInit() {
  }

  validateSubmission(){
    if(this.usernameValidation() &&
      this.passwordValidation()){
        this.valid = true;
        this.user.name = '';
        this.user.password = '';
        this.user.passwordConfirm = '';
    }
    else{
      this.valid = false;
    }
  }

  refreshValidation(){
    this.valid = false;
  }

  usernameValidation(){
    if(!this.user.name) this.usernameError = this.errors.empty;
    else{
      this.usernameError = '';
      return true;
    }
    return false;

  }
  passwordValidation(){
    if(!this.user.password) {
      this.passwordError = this.errors.empty;
    }
    else if(!this.user.passwordConfirm){
      this.passwordConfirmError = this.errors.empty;
      this.passwordError = '';
    }
    else if(this.user.password != this.user.passwordConfirm){
      this.passwordError = this.errors.mismatch;
      this.passwordConfirmError = this.errors.mismatch;
    }
    else{
      this.passwordError = '';
      this.passwordConfirmError = '';
      return true;
    }

    return false;


  }

}
