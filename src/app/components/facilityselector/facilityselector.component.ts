import { Component, OnInit } from '@angular/core';
import {SportsFacilityService} from "../../services/sportsfacility.service";
import {SportsFacility} from "../../models/sportsFacility.model";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-facilityselector',
  templateUrl: './facilityselector.component.html',
  styleUrls: ['./facilityselector.component.scss']
})
export class FacilityselectorComponent implements OnInit {
  sportsfacilities: SportsFacility[];
  user: User;

  constructor(private router:Router,private sportsfacilityService: SportsFacilityService, private authService: AuthService) { }

  ngOnInit() {
    this.authService.setFacilityId(null);
    this.user = this.authService.getUser();
    console.log(this.user.username);
    this.sportsfacilityService.getFacilities()
      .then(res => {
        this.sportsfacilities = res;
      })
  }

  onFacilitySelected(facility: SportsFacility){
    console.log('ID:'+facility._id);
    this.authService.setFacility(facility);
    this.authService.setFacilityId(facility._id);
    this.router.navigate(['/home']);
  }

}
