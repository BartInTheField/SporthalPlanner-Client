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

  constructor(private http: Http) { }

  signinOperator(user: User) {
    return new Promise((resolve,reject) => {
      this.http.post(environment.serverUrl + '/users/auth', user)
        .toPromise()
        .then(res => {
          if(res.status = 200){

            this.user = res.json() as User;
            let token = JSON.parse(res.text());
            this.token = token['token'];

            console.log(this.token);

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
}
