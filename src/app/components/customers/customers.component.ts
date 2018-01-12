
import { Customer, CustomerMaker } from './../../models/customer.model';
import { Subscription } from 'rxjs/Subscription';
import { CustomerService } from '../../services/customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  private customerSubscription: Subscription;
  private customers: Customer[];

  public customersSporthalHuren: Customer[] = [];
  public customersNonSporthalHuren: Customer[] = [];

  public isLoading: boolean = true;
  public isAddingCustomer: boolean = false;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerSubscription = this.customerService.customerSubject.subscribe((next: Customer[]) => {
      this.customers = next;
      this.fillArrays();
      this.isLoading = false;
    })
    this.customerService.getCustomers();
  }

  private fillArrays() : void {
    this.customers.forEach((customer: Customer) => {
      if(customer.isSporthalHurenCustomer) {
        this.customersSporthalHuren.push(customer);
      } else {
        this.customersNonSporthalHuren.push(customer);
      }
    });
  }

  public addCustomer(firstName, lastName) {
    this.customerService.postCustomer(firstName, lastName);
    this.customersNonSporthalHuren.push(CustomerMaker.makeNonSporthalHuren(null ,firstName, lastName));
  }

  public deleteCustomer(id) {
    this.customerService.deleteCustomer(id);
    this.removeFromCustomerArray(this.customersNonSporthalHuren, id);
    this.removeFromCustomerArray(this.customers, id);
  }

  private removeFromCustomerArray(array: Array<Customer>, idToRemove) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === idToRemove) {
        array.splice(i, 1);
      }
    }
  }
}
