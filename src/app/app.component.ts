import { ActivatedRoute } from '@angular/router';
import { NavbarService } from './services/navbar.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  navBarIsShowing: boolean;

  constructor(private authService: AuthService,private navbarService: NavbarService) {}

  ngOnInit() {
    this.navbarService.navbarIsOut.subscribe(next => {
      this.navBarIsShowing = next;
    });
  }

  isAuth(){
    if(this.authService.isAuthenticated() == true){
      return true;
    } else {
      return false;
    }
  }

  selectedASportsHall(){
    if(this.authService.selectedASportsFacility() == true){
      return true;
    } else {
      return false;
    }
  }
}
