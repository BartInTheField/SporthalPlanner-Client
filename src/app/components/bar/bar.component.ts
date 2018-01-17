import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  public showMenu = true;

  constructor(private authService: AuthService,private navbarService: NavbarService) { }

  ngOnInit() {
    this.navbarService.navbarIsOut.subscribe(next => {
      this.showMenu = !next;
    });
  }

  toggleNav() {
    this.navbarService.toggleNavbar();
  }

  isAuth(){
    if(this.authService.isAuthenticated() == true && this.authService.selectedASportsFacility() == true){
      return true;
    } else {
      return false;
    }
  }

}
