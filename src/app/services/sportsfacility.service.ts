import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {SportsFacility} from "../models/sportsFacility.model";
import {environment} from "../../environments/environment";

@Injectable()
export class SportsFacilityService{
  private sportsfacilities: SportsFacility[];
  private sportsFacilitiesURl = environment.serverUrl + '/sportsfacilities/';

  constructor(private http: Http) {
  }

  getFacilities(){
    return this.http.get(this.sportsFacilitiesURl)
      .toPromise()
      .then(res => {
        this.sportsfacilities = res.json() as SportsFacility[];
        return res.json() as SportsFacility;
      })
      .catch(error => {
        return this.handleError(error);
      })
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
