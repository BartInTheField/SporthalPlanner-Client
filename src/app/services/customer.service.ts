import { CustomerMaker } from '../models/customer.model';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';


@Injectable()
export class CustomerService {
private headers = new Headers({ 'Content-Type' : 'application/json'});
private serverUrl = environment.serverUrl + '/customers/' + '5a5736441d2b574a586bebb2';

  public customerSubject = new Subject<Customer[]>();

  constructor(private http: Http) {
  }

  public getCustomers() {
    this.http.get(this.serverUrl, {headers: this.headers})
      .toPromise()
      .then((response) => {
          const customers: Customer[] = [];
          const responseArray = response.json();
          responseArray.forEach(customer => {
            if (customer.isSporthalHurenCustomer) {
              customers.push( CustomerMaker.makeSporthalHuren(customer.id, customer.sporthalHurenUsername, customer.sporthalHurenUserId));
            } else {
              customers.push( CustomerMaker.makeNonSporthalHuren(customer.id, customer.firstName, customer.lastName));
            }
          });
          this.customerSubject.next(customers);
      })
      .catch((error) => {
        return this.handleError(error);
      });
  }

  private handleError(error: any): Promise<any> {
    console.log('handleError');
    return Promise.reject(error.message || error);
  }

}
