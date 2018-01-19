import { Component, OnInit } from '@angular/core';
import {Maintenance} from "../../models/maintenance.model";
import {MaintenanceService} from "../../services/maintenance.service";
import {AuthService} from "../../services/auth.service";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Maintenancee} from "../../models/maintenancee.model";

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit {
  private maintenencesForSingleFacility: Maintenance[];
  private maitenanceForm: FormGroup;
  private maintenancee: Maintenancee;
  private maintenance: Maintenance;
  private days: Date[] = [];
  private materials: string[] = [];

  constructor(private authService: AuthService,private maintenanceService: MaintenanceService) { }

  ngOnInit() {
    this.maintenanceService.getAllMaintenanceFromSingleFacility(this.authService.getFacilityId())
      .then(res => {
        this.maintenencesForSingleFacility = res;
      })
      .catch(error => console.log(error));
    this.initForm();
  }

  onSave(){
    this.days.push(this.maitenanceForm.value.days);
    this.materials.push(this.maitenanceForm.value.materials);

    this.maintenancee = new Maintenancee;
    this.maintenancee.Subject = this.maitenanceForm.value.subject;
    this.maintenancee.SportsFacility = this.authService.getFacilityId()
    this.maintenancee.Reason = this.maitenanceForm.value.reason;
    this.maintenancee.Days = this.days;
    this.maintenancee.Materials = this.materials;

    console.log(this.maintenancee.Subject);
    console.log(this.maintenancee.SportsFacility);
    console.log(this.maintenancee.Reason);
    console.log(this.maintenancee.Days);
    console.log(this.maintenancee.Materials);
    console.log('______________________');

    this.maintenanceService.postSingleMaintenance(this.maintenancee)
      .then(res => {
        console.log(res);
      })
    this.maintenencesForSingleFacility.push(this.maitenanceForm.value);
  }

  initForm(){
    this.maitenanceForm = new FormGroup({
      'subject':new FormControl('',Validators.required),
      'days':new FormControl('',Validators.required),
      'reason':new FormControl('',Validators.required),
      'materials':new FormControl('')
    })
  }
}
