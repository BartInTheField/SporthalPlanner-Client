import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.onInit();
  }

  onInit(){
    this.userForm = new FormGroup({
      'username':new FormControl('',Validators.required),
      'password':new FormControl('',Validators.required)
    })
  }

  onSignin(){
    //sign in
  }

}
