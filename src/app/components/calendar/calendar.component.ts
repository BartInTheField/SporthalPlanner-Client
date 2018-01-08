import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  public hoursInADay: number[] = [];

  constructor() {
    this.fillHours();
  }

  ngOnInit() {
  }

  private fillHours(): void {
    var i: number;
    for(i = 0; i < 24; i++ ) {
      this.hoursInADay.push(i);
    }
  }

}
