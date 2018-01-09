import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ClosingDay} from "../../models/closingday.model";
import {SportsFacilityService} from "../../services/sportsfacility.service";
import {SportsFacility} from "../../models/sportsFacility.model";

@Component({
  selector: 'app-closingdays',
  templateUrl: './closingdays.component.html',
  styleUrls: ['./closingdays.component.scss']
})
export class ClosingdaysComponent implements OnInit {
  closingdaysForm: FormGroup;
  closingdays: ClosingDay[];
  sportsFacility: SportsFacility;

  constructor(private sportsFacilityService: SportsFacilityService) { }

  ngOnInit() {
    this.initForm();
    this.getClosingDays();
  }

  private initForm(){
    this.closingdaysForm = new FormGroup({
      'reason': new FormControl('',Validators.required),
      'date': new FormControl('',Validators.required)
    })
  }

  getClosingDays(){
    this.sportsFacilityService.getFacility("1")
      .then(res => this.sportsFacility = res)
      .catch(error => console.log(error));
  }

  onSave(){
    // this.
  }
}
