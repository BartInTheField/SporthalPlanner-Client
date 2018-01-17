import {Injectable} from '@angular/core';
import {Planning} from "../models/planning.model";
import {environment} from "../../environments/environment";
import {Http, Headers} from "@angular/http";
import {Subject} from "rxjs/Subject";

@Injectable()
export class PlanningService {
  private wholePlanning: Planning[] = [];
  private memberPlanning: Planning[] = [];
  private headers = new Headers({ 'Content-Type' : 'application/json'});
  private planningUrl = environment.serverUrl + '/planning/';
  public planningSubject = new Subject<Planning[]>();

  constructor(private http: Http) {}

  //GET Request see whole planning from 1 facility:
  public getPlanningFromFacility(facilityId: string = '5a573790ef7ac53314281a2b') {
      this.http.get(this.planningUrl + 'sportsfacilities/' + facilityId, {headers: this.headers})
        .toPromise()
        .then((response) => {
          this.wholePlanning = response.json() as Planning[];
          this.planningSubject.next(this.wholePlanning.slice());
        })
        .catch((error) => {
            return this.handleError(error);
        });
  }

  //GET Request see planning from 1 staffmember:
  public getPlanningFromStaffMember(staffmemberId: string = '5a5cb44a4df97f2d084c63b1'){
      this.http.get(this.planningUrl + 'staffmembers/' + staffmemberId, {headers: this.headers})
        .toPromise()
        .then((response) => {
          this.memberPlanning = response.json() as Planning[];
          this.planningSubject.next(this.memberPlanning.slice())
        })
        .catch((error) => {
          return this.handleError(error);
        })
  }

  //DELETE Request delete single planning from 1 member:
  public deletePlanningFromStaffMember(id: string) {
    return this.http.delete(this.planningUrl + id, {headers: this.headers})
      .toPromise()
      .catch((error) => {
        return this.handleError(error);
      });
  }

  //POST Request add single planning for 1 member:
  public addPlanningForStaffMember(planning: Planning) {
    return this.http.post(this.planningUrl, planning)
      .toPromise()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        return this.handleError(error);
      });
  }

  //Handle error:
  private handleError(error: any): Promise<any> {
    console.log('een error');
    return Promise.reject(error.message || error);
  }
}
