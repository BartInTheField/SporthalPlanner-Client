import { DateService } from './../../../services/date.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})
export class WeekComponent implements OnInit {

  public week: number;
  public year: number;
  public date: Date;
  public dateString: string;
  public highlightDatepicker: boolean = false;
  private highlightTimer;

  public showMonday: boolean = true;
  public showTuesday: boolean = false;
  public showWednesday: boolean = false;
  public showThursday: boolean = false;
  public showFriday: boolean = false;
  public showSaterday: boolean = false;
  public showSunday: boolean = false;


  constructor(private dateService: DateService) {
    this.date = new Date();
    this.dateString = this.dateService.fillInDateString(this.date);
    this.week = moment().week();
    this.year = this.date.getFullYear();
   }

   ngOnInit() {
  }

  changeDate(date: string) {
    this.dateString = date;
    this.date = new Date(date);
    this.week = moment(this.dateString, "YYYY-MM-DD").week();
    this.year = this.date.getFullYear();
  }

  onDayChange(changeWith: number) {
    this.date.setDate(this.date.getDate() + changeWith);
    this.dateString = this.dateService.fillInDateString(this.date);
    this.highlightDayPicker();
    console.log(this.dateString);
    this.week = moment(this.dateString, "YYYY-MM-DD").week();
    this.year = this.date.getFullYear();    
  }

  highlightDayPicker() {
    this.highlightDatepicker = true;
    clearTimeout(this.highlightTimer);
    this.highlightTimer = setTimeout(() =>  this.removeHighlightDayPicker(), 500);
  }

  removeHighlightDayPicker() {
    this.highlightDatepicker = false;
  }

  disableMobileDays() {
    if (this.showMonday)
      this.showMonday = false;

    if (this.showTuesday)
      this.showTuesday = false;

    if (this.showWednesday)
      this.showWednesday = false;

    if (this.showThursday)
      this.showThursday = false;

    if (this.showFriday)
      this.showFriday = false;

    if (this.showSaterday)
      this.showSaterday = false;

    if (this.showSunday)
      this.showSunday = false;
  }

}