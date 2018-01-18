import { SportsFacility } from './../models/sportsFacility.model';
import {Http} from "@angular/http";
import {User} from "../models/user.model";
import {toPromise} from "rxjs/operator/toPromise";
import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {
  user: User;
  token: string = null;
  sportsfacilityId: string = null;
  sportsFacility: SportsFacility;

  constructor(private http: Http) { }

  signinOperator(user: User) {
    return new Promise((resolve,reject) => {
      this.http.post(environment.serverUrl + '/users/auth', user)
        .toPromise()
        .then(res => {
          if(res.status = 200){

            let text = JSON.parse(res.text());
            this.token = text['token'];
            this.user = text['user'];
            console.log('GEBRUIKERID: '+this.user._id);

            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch(error => {
          resolve(false);
          return this.errorHandler(error);
        });
    })
  }

  getUser(){
    return this.user;
  }

  getUserId(){
    return this.user._id;
  }

  private errorHandler(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

  isAuthenticated(){
    return this.token != null;
  }

  selectedASportsFacility(){
    return this.sportsfacilityId != null;
  }

  setFacilityId(id: string){
    this.sportsfacilityId = id;
  }

  getFacilityId(){
    return this.sportsfacilityId;
  }

  setFacility(facility: SportsFacility){
    this.sportsFacility = facility;
  }

  getFacility(){
    return this.sportsFacility;
  }
}
