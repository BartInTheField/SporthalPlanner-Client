import { DateService } from './../../../services/date.service';
import { Component, OnInit } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { BookingService } from '../../../services/booking.service';
import { Booking } from '../../../models/booking.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {

  bookings: Booking[];
  subscription: Subscription;

  public date: Date;
  public dateString: string;
  public highlightDatepicker: boolean = false;
  private highlightTimer;

  constructor(private dateService: DateService, private bookingService: BookingService) {
    this.date = new Date();
    this.dateString = this.dateService.fillInDateString(this.date)
  }

  ngOnInit() {
    this.subscription = this.bookingService.bookingsChanged
      .subscribe((bookings) => {
        this.bookings = bookings;
      });
    
    this.bookingService.getBookingsByDate(new Date(this.dateString));
  }

  changeDate(date: string) {
    this.dateString = date;
    this.date = new Date(date);
    this.bookingService.getBookingsByDate(new Date(this.dateString));
  }

  onDayChange(changeWith: number) {
    this.date.setDate(this.date.getDate() + changeWith);
    this.dateString = this.dateService.fillInDateString(this.date);
    this.highlightDayPicker();
    this.bookingService.getBookingsByDate(new Date(this.dateString));
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
