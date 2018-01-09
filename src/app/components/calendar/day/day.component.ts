import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  
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
