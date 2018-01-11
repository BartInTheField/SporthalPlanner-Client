import { ActivatedRoute } from '@angular/router';
import { SportsHall } from './../../models/sportsHall.model';
import { Field } from './../../models/field.model';
import { SportsHallField } from './../../models/sportsHallField.model';
import { Component, OnInit } from '@angular/core';
import { Booking } from '../../models/booking.model';
import { SportsFacility } from '../../models/sportsFacility.model';
import { OpeningHours } from '../../models/openingHours.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  public showWeek: boolean = false;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    if (this.route.snapshot.url[0].path === 'week') {
        this.showWeek = true;
    }
  }

}
