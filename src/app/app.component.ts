import { NavbarService } from './services/navbar.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  navBarIsShowing: boolean;

  constructor(private navbarService: NavbarService) {

  }

  ngOnInit() {
    this.navbarService.navbarIsOut.subscribe(next => {
      this.navBarIsShowing = next;
    });
  }
}
