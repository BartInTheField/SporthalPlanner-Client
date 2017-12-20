import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-declined',
  templateUrl: './plan-declined.component.html',
  styleUrls: ['./plan-declined.component.scss']
})
export class PlanDeclinedComponent implements OnInit {

  public bookings = [{}, {}, {}];

  constructor() { }

  ngOnInit() {
  }

}
