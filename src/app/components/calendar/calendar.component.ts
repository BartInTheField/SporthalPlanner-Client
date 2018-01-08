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

  public hoursInADay: number[] = [];
  public bookingsToDisplay = [];

  private bookings = [{startingTime : '12:00', endingTime : '12:30', user : {UserName: 'bartaveld'}}, {startingTime : '16:00', endingTime : '17:30', user : {UserName: 'bartaveld'}}]

  constructor() {
    this.fillHours();
  }

  ngOnInit() {
  }

  private fillHours(): void {
    var i: number;
    for(i = 6; i < 24; i++ ) {
      this.hoursInADay.push(i);
      this.bookingsToDisplay.push([])
    }

    this.bookings.forEach(booking => {
      const firstNumber = parseInt(booking.startingTime.substring(0, 2));
      console.log(firstNumber);
      this.bookingsToDisplay[firstNumber].push(booking);
    });
  }
}
