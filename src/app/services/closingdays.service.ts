import {ClosingDay} from '../models/closingday.model';
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class ClosingDaysService {
  private allClosingdays: ClosingDay[];
  private closingdaysForOneFacility: ClosingDay[];

  constructor(private http: Http){}

  getClosingDaysFromFacility(id: string){
    return this.http.get('http://localhost:6969/api/closingdays/')
      .toPromise()
      .then(response => {
        this.allClosingdays = response.json() as ClosingDay[];
        this.closingdaysForOneFacility = this.allClosingdays.filter(x => x.sportsFacility == id);
        return this.closingdaysForOneFacility;
      })
      .catch(error => {
        return this.handleError(error);
      })
  }

  addClosingDayToFacility(closingday:ClosingDay){
    this.http.post('http://localhost:6969/api/closingdays/',closingday)
      .toPromise()
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        return this.handleError(error);
      })
  }

  deleteClosingDayFromFacility(id:string){
    this.http.delete('http://localhost:6969/api/closingdays/'+id)
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
