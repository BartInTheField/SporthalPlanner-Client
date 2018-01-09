import {Component, OnDestroy, OnInit} from '@angular/core';
import {BookingService} from '../../services/booking.service';
import {Subscription} from 'rxjs/Subscription';
import {Booking} from '../../models/booking.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  bookings: Booking[];
  subscription: Subscription;

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.subscription = this.bookingService.bookingsChanged
      .subscribe(
        (bookings: Booking[]) => {
          this.bookings = bookings;
        }
      );
    this.bookingService.getBookings();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
