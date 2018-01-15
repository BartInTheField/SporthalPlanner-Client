import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class StaffMemberService {
  private headers = new Headers({ 'Content-Type' : 'application/json'});
  private staffMemberUrl = environment.serverUrl + '/staffmembers';


  constructor(private http: Http) {}

  private handleError(error: any): Promise<any> {
    console.log('handleError');
    return Promise.reject(error.message || error);
  }

  //NOTE: Deze functie is niet getest!!! 
  public getStaffMembers() {
    return this.http.get(this.staffMemberUrl, {headers: this.headers})
      .toPromise()
      .then((response) => {
        //this.staffmembers = response.json() as StaffMember[];
        //this.staffMembersChanged.next(this.staffmembers.slice());
      })
      .catch((error) => {
        return this.handleError(error);
      });
  }

  //NOTE: Deze functie is niet getest!!! 
  public getStaffMember() {
    return this.http.get(this.staffMemberUrl, {headers: this.headers})
      .toPromise()
      .then((response) => {
        //return response.json();
      })
      .catch((error) => {
        return this.handleError(error);
      });
  }
}
