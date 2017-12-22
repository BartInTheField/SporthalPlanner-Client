import {Component, Input, OnInit} from '@angular/core';
import {OpeningHours} from '../../../models/openingHours.model';

@Component({
  selector: 'app-openinghours',
  templateUrl: './openinghours.component.html',
  styleUrls: ['./openinghours.component.scss']
})
export class OpeninghoursComponent implements OnInit {
  @Input() openingHours: OpeningHours;

  constructor() { }

  ngOnInit() {
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
