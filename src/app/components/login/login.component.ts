import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../models/user.model";
import {NavbarService} from "../../services/navbar.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  message: String = null;
  navBarIsShowing: boolean;

  constructor(private router: Router,private authService: AuthService) { }

  ngOnInit() {
    this.onInit();
  }

  onInit(){
    this.message = 'Probeer in te loggen';
    this.userForm = new FormGroup({
      'username':new FormControl('',Validators.required),
      'password':new FormControl('',Validators.required)
    })
  }

  onSignin(){
    this.authService.signinOperator(this.userForm.value)
      .then(res => {
        if(res == true){
          this.router.navigate(['/facilityselector']);
        } else {
          this.message = 'Er ging iets mis, probeer het nog is';
        }
      })
  }

}
