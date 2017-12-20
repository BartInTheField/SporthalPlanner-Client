import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import {Booking} from '../models/booking.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class BookingService {
  private headers = new Headers({ 'Content-Type' : 'application/json'});
  private serverUrl = environment.serverUrl + '/bookings';

  private bookings: Booking[];
  bookingsChanged = new Subject<Booking[]>();

  constructor(private http: Http) {}

  private handleError(error: any): Promise<any> {
    console.log('handleError');
    return Promise.reject(error.message || error);
  }

  private getBookingsAsync() {
    return this.http.get(this.serverUrl, {headers: this.headers})
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
}
