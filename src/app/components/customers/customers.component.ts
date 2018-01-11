import { Customer } from './../../models/customer.model';
import { Subscription } from 'rxjs/Subscription';
import { CustomerService } from './../../services/customer.service';
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

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    console.log(this.customers);

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

}
