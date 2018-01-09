import {Component, OnDestroy, OnInit} from '@angular/core';
import {OpeningHoursService} from '../../services/openinghours.service';
import {OpeningHours} from '../../models/openingHours.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit, OnDestroy {
  openingHours: OpeningHours;
  subscription: Subscription;

  constructor(private ohService: OpeningHoursService) { }

  ngOnInit() {
    this.subscription = this.ohService.openingHoursChanged
      .subscribe(
        (openingHours: OpeningHours[]) => {
          this.openingHours = openingHours[0]; // in the future this will return one openingHours object
        }
      );
    this.openingHours = this.ohService.getOpeningHoursAsync()[0]; // in the future this will return one openingHours object
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
