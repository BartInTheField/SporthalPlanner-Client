import { NavbarService } from './../../services/navbar.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public show: boolean;

  constructor(private navbarService: NavbarService ) { }

  ngOnInit() {
    this.navbarService.navbarIsOut.subscribe(next => {
      this.show = next;
    });
  }

}
