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

  constructor() {
    this.date = new Date();
    this.week = moment().week();
   }

  ngOnInit() {
  }

}
