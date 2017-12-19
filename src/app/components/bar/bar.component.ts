import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  public showMenu = true;

  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
    this.navbarService.navbarIsOut.subscribe(next => {
      this.showMenu = !next;
    });
  }

  toggleNav() {
    this.navbarService.toggleNavbar();
  }

}
