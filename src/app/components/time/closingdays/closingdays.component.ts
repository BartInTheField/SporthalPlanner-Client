import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ClosingDay} from "../../../models/closingday.model";
import {SportsFacilityService} from "../../../services/sportsfacility.service";
import {SportsFacility} from "../../../models/sportsFacility.model";
import {ClosingDaysService} from "../../../services/closingdays.service";
import {reject} from "q";
import * as moment from 'moment';
import {DateService} from '../../../services/date.service';
import {Customer} from '../../../models/customer.model';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-closingdays',
  templateUrl: './closingdays.component.html',
  styleUrls: ['./closingdays.component.scss']
})
export class ClosingdaysComponent implements OnInit {
  private closingdaysForm: FormGroup;
  private closingdays: ClosingDay[];
  private closingday: ClosingDay;
  private id: string;
  private weekNumber;

  constructor(private authService:AuthService,private closingDaysService: ClosingDaysService) { }

  ngOnInit() {
    this.initForm();
    this.getClosingDays();
    this.id = this.authService.getFacilityId();
  }

  private initForm(){
    this.closingdaysForm = new FormGroup({
      'reason': new FormControl('',Validators.required),
      'date': new FormControl('',Validators.required),
      'sportsFacilityId': new FormControl(this.id)
    })
  }

  getClosingDays(){
    this.closingDaysService.getClosingDaysFromFacility(this.id)
      .then(res => {
        this.closingdays = res;
      })
      .catch(error => console.log(error));
  }

  onAddPromise(){
    return new Promise((resolve,reject) => {
      this.closingday = this.closingdaysForm.value;
      this.closingday.sportsFacility = this.id;
      console.log(this.closingday._id);

      this.closingdays.push(this.closingdaysForm.value);

      this.closingDaysService.addClosingDayToFacility(this.closingday);
      this.closingdaysForm = new FormGroup({
        'reason': new FormControl('',Validators.required),
        'date': new FormControl('',Validators.required),
        'sportsFacilityId': new FormControl(this.id)
      });
      resolve(true);
    })
  }

  onAdd(){
      this.onAddPromise()
        .then(res => {
          if(res == true){
          }
        })
  }

  onDelete(closingday: ClosingDay){
    console.log('ID: '+closingday._id);
    this.closingDaysService.deleteClosingDayFromFacility(closingday._id);
    let i = this.closingdays.indexOf(closingday);
    this.closingdays.splice(i,1);
  }
}
