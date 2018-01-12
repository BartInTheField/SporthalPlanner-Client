import { Injectable } from '@angular/core';
import * as moment from 'moment';

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

  public getClosestMonday(date: Date){
    if(moment(date).day() == 1){
      return moment(date).format('YYYY-MM-DD');
    }
    for(let i = 0; i < 7;i++) {
      let newday = moment(date).subtract(i,'day').day();
      if(newday == 1){
        return moment(date).subtract(i,'day').format('YYYY-MM-DD');
      }
    }
  }
}
