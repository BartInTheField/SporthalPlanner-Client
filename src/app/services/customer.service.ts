import { CustomerMaker } from '../models/customer.model';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';


@Injectable()
export class CustomerService {
private headers = new Headers({ 'Content-Type' : 'application/json'});
private serverUrl = environment.serverUrl + '/customers/';

  public customerSubject = new Subject<Customer[]>();

  constructor(private http: Http) {
  }

  public getCustomers() {
    this.http.get(this.serverUrl + '1', {headers: this.headers})
      .toPromise()
      .then((response) => {
          const customers: Customer[] = [];
          const responseArray = response.json();
          responseArray.forEach(customer => {
            if (customer.isSporthalHurenCustomer) {
              customers.push( CustomerMaker.makeSporthalHuren(customer._id, customer.sporthalHurenUsername, customer.sporthalHurenUserId));
            } else {
              customers.push( CustomerMaker.makeNonSporthalHuren(customer._id, customer.firstName, customer.lastName));
            }
          });
          this.customerSubject.next(customers);
      })
      .catch((error) => {
        this.handleError(error);
      });
  }

  public postCustomer(firstName, lastName) {
    const userId = '1';
    const customer = {userId: userId, firstName: firstName, lastName: lastName};
    this.http.post(this.serverUrl, customer, {headers: this.headers})
    .toPromise()
      .catch((error) => {
        this.handleError(error);
      })
  }

  public deleteCustomer(id: string) {
    this.http.delete(this.serverUrl + id, {headers: this.headers})
    .toPromise()
      .catch((error) => {
        this.handleError(error);
      })
  }

  private handleError(error: any): Promise<any> {
    console.log('handleError');
    return Promise.reject(error.message || error);
  }

}
