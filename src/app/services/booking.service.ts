import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import {Booking} from '../models/booking.model';
import {Subject} from 'rxjs/Subject';
import { DateService } from './date.service';
import {AuthService} from "./auth.service";

@Injectable()
export class BookingService {
  private headers = new Headers({ 'Content-Type' : 'application/json'});
  private bookingsUrl = environment.serverUrl + '/bookings';
  private dayOverviewUrl = environment.serverUrl + '/dayoverview';
  private weekOverviewUrl = environment.serverUrl + '/weekoverview';

  private bookings: Booking[];
  bookingsChanged = new Subject<Booking[]>();
  weekOverviewChanged = new Subject<any[]>();
  private weekOverview = [];

  constructor(private authService: AuthService,private http: Http, private dateService: DateService) {}

  private handleError(error: any): Promise<any> {
    console.log('handleError');
    return Promise.reject(error.message || error);
  }

  private getBookingsAsync() {
    return this.http.get(this.bookingsUrl, {headers: this.headers})
      .toPromise()
      .then((response) => {
        return response.json() as [Booking[]];
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
    this.http.get(this.dayOverviewUrl+'/'+this.authService.getUserId()+'/'+this.authService.getFacilityId()+'/'+this.dateService.fillInDateString(date,true), {headers: this.headers})
      .toPromise()
      .then((response) => {
        console.log(response.json());
        this.bookings = response.json() as Booking[];
        this.bookingsChanged.next(this.bookings.slice());
      })
      .catch((error) => {
        return this.handleError(error);
      });
  }

  getBookingsByWeek(date: Date){
    this.http.get(this.weekOverviewUrl+'/'+this.authService.getUserId()+'/'+this.authService.getFacilityId()+'/'+this.dateService.fillInDateString(date,true), {headers: this.headers})
      .toPromise()
      .then((response) => {
        this.weekOverview = response.json() as [Booking[]];
        this.weekOverviewChanged.next(this.weekOverview.slice());
      })
      .catch((error) => {
        return this.handleError(error);
      });
  }
}
