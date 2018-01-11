import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {SportsFacility} from "../models/sportsFacility.model";

@Injectable()
export class SportsFacilityService{
  constructor(private http: Http) {
  }

  getFacility(id: string){
    return this.http.get(''+id)
      .toPromise()
      .then(res => {
        return res.json() as SportsFacility;
      })
      .catch(error => {
        return this.handleError(error);
      })
  }

  updateFacility(id: string, sportsfacility: SportsFacility){
    return this.http.put(''+id,sportsfacility)
      .toPromise()
      .then(response => {
        console.log('Succes!');
      })
      .catch(error => {
        return this.handleError(error);
      })
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
