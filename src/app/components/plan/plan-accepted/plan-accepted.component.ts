import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-accepted',
  templateUrl: './plan-accepted.component.html',
  styleUrls: ['./plan-accepted.component.scss']
})
export class PlanAcceptedComponent implements OnInit {

  public bookings = [{}, {}, {}];

  constructor() { }

  ngOnInit() {
  }

}
