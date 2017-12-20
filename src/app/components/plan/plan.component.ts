import { NavbarService } from './../../services/navbar.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  public showMenu = true;

  public bookings = [{}, {}, {}];

  constructor(private navbarService: NavbarService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.navbarService.navbarIsOut.subscribe(next => {
      this.showMenu = !next;
    });

    this.router.navigate(['./pending'], {relativeTo: this.route});
  }

}
