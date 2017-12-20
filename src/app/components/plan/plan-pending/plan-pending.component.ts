import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-pending',
  templateUrl: './plan-pending.component.html',
  styleUrls: ['./plan-pending.component.scss']
})
export class PlanPendingComponent implements OnInit {

  public bookings = [{}, {}, {}];

  constructor() { }

  ngOnInit() {
  }

}
