import { Injectable } from '@angular/core';

@Injectable()
export class DateService {

  constructor() { }

  public fillInDateString(date: Date, isUrl = false): string {
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
    if(isUrl)
      return yearString+''+monthString+''+dayString
    else
      return yearString+'-'+monthString+'-'+dayString

  }
}
