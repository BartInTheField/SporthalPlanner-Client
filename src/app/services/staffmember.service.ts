import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import {Subject} from 'rxjs/Subject';
import {StaffMember} from '../models/staffMember';

@Injectable()
export class StaffMemberService {
  private headers = new Headers({ 'Content-Type' : 'application/json'});
  private staffMemberUrl = environment.serverUrl + '/staffmembers';
  public staffMemberSubject = new Subject<StaffMember[]>();
  private staffMembers: StaffMember[] = [];


  constructor(private http: Http) {}

  private handleError(error: any): Promise<any> {
    console.log('handleError');
    return Promise.reject(error.message || error);
  }

  //NOTE: Deze functie is niet getest!!!
  public getStaffMembers() {
    this.http.get(this.staffMemberUrl, {headers: this.headers})
      .toPromise()
      .then((response) => {
        this.staffMembers = response.json() as StaffMember[];
        this.staffMemberSubject.next(this.staffMembers.slice());
      })
      .catch((error) => {
        return this.handleError(error);
      });
  }

  public getStaffMember() {
    return this.http.get(this.staffMemberUrl, {headers: this.headers})
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        return this.handleError(error);
      });
  }

  public addStaffMember(staffmember: StaffMember) {
    return this.http.post(this.staffMemberUrl, staffmember)
      .toPromise()
      .then((response) => {

      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  public deleteStaffMember(id: number) {
    return this.http.delete(this.staffMemberUrl + '/' + id, { headers: this.headers })
      .toPromise()
      .catch((error) => {
        return this.handleError(error);
      })
  }
}
