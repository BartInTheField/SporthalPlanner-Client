import {Component, OnDestroy, OnInit} from '@angular/core';
import {BookingService} from '../../services/booking.service';
import {Subscription} from 'rxjs/Subscription';
import {Booking} from '../../models/booking.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public username: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.username = this.authService.getUser().username;
  }
}
