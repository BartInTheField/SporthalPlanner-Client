import { Component, OnInit } from '@angular/core';
import {Maintenance} from "../../models/maintenance.model";
import {MaintenanceService} from "../../services/maintenance.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit {
  private maintenencesForSingleFacility: Maintenance[];

  constructor(private authService: AuthService,private maintenanceService: MaintenanceService) { }

  ngOnInit() {
    this.maintenanceService.getAllMaintenanceFromSingleFacility(this.authService.getFacilityId())
      .then(res => {
        this.maintenencesForSingleFacility = res;
      })
      .catch(error => console.log(error));
  }

}
