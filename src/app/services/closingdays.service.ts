import {ClosingDay} from '../models/closingday.model';
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {environment} from '../../environments/environment';
import {Subject} from 'rxjs/Subject';
import * as moment from 'moment';
import {DateService} from './date.service';

@Injectable()
export class ClosingDaysService {
  public daysClosedSubject = new Subject<number[]>();
  private allClosingdays: ClosingDay[];
  private closingdaysForOneFacility: ClosingDay[];
  private closingDayUrl = environment.serverUrl + '/closingdays/';

  constructor(private http: Http,
              private dateService: DateService){}

  getClosingDaysFromFacility(id: string){
    return this.http.get(this.closingDayUrl)
      .toPromise()
      .then((response) => {
        const currentWeek = moment().week();

        this.allClosingdays = response.json() as ClosingDay[];

        //set weekNumber for every closingDay
        const allDaysClosed: number[] = [undefined, undefined, undefined, undefined, undefined, undefined, undefined];
        this.allClosingdays.forEach(closingDay => {
          const newDate: Date = new Date(
            +closingDay.date.toString().substring(0, 4),
            +(closingDay.date.toString().substring(5,7)) - 1,
            +closingDay.date.toString().substring(8,10));
          closingDay.weekNumber = this.getWeekNumber(
            newDate
            );
          closingDay.date = newDate;

          const closedOnDay = this.compareDates(currentWeek, closingDay);
          if (closedOnDay !== -1) {
            allDaysClosed[closedOnDay] = (closedOnDay);
          }
        });

        this.daysClosedSubject.next(allDaysClosed);

        this.closingdaysForOneFacility = this.allClosingdays.filter(x => x.sportsFacility == id);
        // this.daysClosedSubject.next(response.json());

        return this.closingdaysForOneFacility;

      })
      .catch(error => {
        return this.handleError(error);
      })
  }

  getWeekNumber(date: Date) {
    return moment(this.dateService.fillInDateString(new Date(date)), "YYYY-MM-DD").week();
  }

  compareDates(currentWeek: number, closingDay: ClosingDay) {
    if (currentWeek === closingDay.weekNumber) {
       return moment(this.dateService.fillInDateString(closingDay.date), "YYYY-MM-DD").day();
    } else {
      return -1;
    }
  }

  addClosingDayToFacility(closingday: ClosingDay){
        this.http.post(this.closingDayUrl, closingday)
          .toPromise()
          .then(res => {
            // console.log(res);
          })
          .catch(error => {
            return this.handleError(error);
      })
  }

  deleteClosingDayFromFacility(id: string){
    this.http.delete(this.closingDayUrl + id)
      .toPromise()
      .then(response => {
        console.log('Succes! response: '+response);
      })
      .catch(error => {
        return this.handleError(error);
      })
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
