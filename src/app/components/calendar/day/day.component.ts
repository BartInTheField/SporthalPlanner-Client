import { Component, OnInit } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {

  public date: Date;
  public dateString: string;
  public highlightDatepicker: boolean = false;

  constructor() {
    this.date = new Date();
    this.dateString = this.fillInDateString(this.date)
  }


  ngOnInit() {
  }

  changeDate(date: string) {
    this.dateString = date;
    this.date = new Date(date);
  }

  onDayChange(changeWith: number) {
    this.date.setDate(this.date.getDate() + changeWith);
    this.dateString = this.fillInDateString(this.date);
    this.highlightDayPicker();
  }

  highlightDayPicker() {
    this.highlightDatepicker = true;
    const promise = new Promise(function(resolve,reject) {
      setTimeout(() => resolve(), 500)
    })

    promise.then(() => {
      this.removeHighlightDayPicker();
    })
  }

  removeHighlightDayPicker() {
    this.highlightDatepicker = false;
  }

  private fillInDateString(date: Date): string {
    const year: number = date.getFullYear()
    const day: number = date.getUTCDate();
    const month: number = date.getMonth() + 1;

    const yearString: string = year.toString();
    let dayString: string;
    let monthString: string;

    if(day < 10) {
      dayString = "0" + day;
    } else {
      dayString = day.toString();
    }

    if(month < 10) {
      monthString = "0" + month;
    } else {
      monthString = month.toString();
    }

    return yearString+'-'+monthString+'-'+dayString
  }
}
