import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import {Booking} from '../models/booking.model';
import {Subject} from 'rxjs/Subject';
import { DateService } from './date.service';

@Injectable()
export class BookingService {
  private headers = new Headers({ 'Content-Type' : 'application/json'});
  private bookingsUrl = environment.serverUrl + '/bookings';
  private dayOverviewUrl = environment.serverUrl + '/dayoverview';

  private bookings: Booking[];
  bookingsChanged = new Subject<Booking[]>();

  constructor(private http: Http, private dateService: DateService) {}

  private handleError(error: any): Promise<any> {
    console.log('handleError');
    return Promise.reject(error.message || error);
  }

  private getBookingsAsync() {
    return this.http.get(this.bookingsUrl, {headers: this.headers})
      .toPromise()
      .then((response) => {
        return response.json() as Booking;
      })
      .catch((error) => {
        return this.handleError(error);
      });
  }

  getBookings() {
    this.getBookingsAsync()
      .then((bookings) => {
        this.bookings = bookings;
        this.bookingsChanged.next(this.bookings.slice());
      })
      .catch((rejected) => {
        console.log(rejected);
      });
  }
  
  getBookingsByDate(date: Date){
    return this.http.get(this.dayOverviewUrl+'/1/1/'+this.dateService.fillInDateString(date,true), {headers: this.headers})
      .toPromise()
      .then((response) => {
        console.log(response.json());
        return response.json() as Booking[];
      })
      .catch((error) => {
        return this.handleError(error);
      });
  }
}
