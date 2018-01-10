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
  public date: Date;
  public dateString: string;
  public highlightDatepicker: boolean = false;
  private highlightTimer;

  constructor(private dateService: DateService) {
    this.date = new Date();
    this.dateString = this.dateService.fillInDateString(this.date);
    this.week = moment().week();
   }

   ngOnInit() {
  }

  changeDate(date: string) {
    this.dateString = date;
    this.date = new Date(date);
    this.week = moment(this.dateString, "YYYY-MM-DD").week();
  }

  onDayChange(changeWith: number) {
    this.date.setDate(this.date.getDate() + changeWith);
    this.dateString = this.dateService.fillInDateString(this.date);
    this.highlightDayPicker();
    console.log(this.dateString);
    this.week = moment(this.dateString, "YYYY-MM-DD").week();
  }

  highlightDayPicker() {
    this.highlightDatepicker = true;
    clearTimeout(this.highlightTimer);
    this.highlightTimer = setTimeout(() =>  this.removeHighlightDayPicker(), 500);
  }

  removeHighlightDayPicker() {
    this.highlightDatepicker = false;
  }

}
