import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  message: String = null;

  constructor(private router: Router,private authService: AuthService) { }

  ngOnInit() {
    this.onInit();

  }

  onInit(){
    this.message = 'Please log in';
    this.userForm = new FormGroup({
      'username':new FormControl('',Validators.required),
      'password':new FormControl('',Validators.required)
    })
  }

  onSignin(){
    this.authService.signinOperator(this.userForm.value)
      .then(res => {
        if(res == true){
          console.log('gelukt');
          this.router.navigate(['/home']);

        } else {
          console.log('mislukt');
          this.message = 'Login failed, please try again';
        }
      })
  }

}
