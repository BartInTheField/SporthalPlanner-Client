import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {OpeningHours} from '../../../models/openingHours.model';
import {Subscription} from 'rxjs/Subscription';
import {ClosingDaysService} from '../../../services/closingdays.service';

@Component({
  selector: 'app-openinghours',
  templateUrl: './openinghours.component.html',
  styleUrls: ['./openinghours.component.scss']
})
export class OpeninghoursComponent implements OnInit, OnDestroy {
  @Input() openingHours: OpeningHours;
  private daysClosedSubscription: Subscription;

  public daysClosed : number[] = [];

  constructor(private closingDaysService: ClosingDaysService) { }

  ngOnInit() {
    this.daysClosedSubscription = this.closingDaysService.daysClosedSubject
      .subscribe((next: number[]) => {
        this.daysClosed = next;
        console.log(next);
      })
    this.closingDaysService.getClosingDaysFromFacility('5a57313ea2f37c265c4326db')
  }

  ngOnDestroy() {
    this.daysClosedSubscription.unsubscribe();
  }

  parseOpeningHours(openingHours: string, openingTime: true ): string {
    if (openingTime) {
      if (this.isOpen(openingHours)) {
        const time = openingHours.split(';')[0].replace(',', '.');
        return (time.length === 5) ? time : '0' + time;
      } else {
        return '';
      }
    } else {
      if (!this.isOpen(openingHours)) {
        return 'GESLOTEN';
      } else {
        const time = openingHours.split(';')[1].replace(',', '.');
        return (time.length === 5) ? time : '0' + time;
      }
    }
  }

  private isOpen(openingHour): boolean {
    return openingHour !== '0,00;0,00';
  }
}
