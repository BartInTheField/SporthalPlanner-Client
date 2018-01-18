import {Component, OnDestroy, OnInit} from '@angular/core';
import {PlanningService} from "../../../services/planning.service";
import {Subscription} from "rxjs/Subscription";
import {Planning} from "../../../models/planning.model";
import {PlanningTogglerService} from '../../../services/planning-toggler.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit, OnDestroy {
  private planning = [];
  private planningSubscription: Subscription;
  private showingAllPlannings: boolean;

  constructor(private planningService: PlanningService,
              private planningTogglerService: PlanningTogglerService) { }

  ngOnInit(): void {
      this.planningSubscription = this.planningService.planningSubject
        .subscribe((next: Planning[]) => {
          this.planning = next;
        });
      this.planningService.getPlanningFromFacility();

      //Subscribe on planning toggler service
      this.planningTogglerService.showingAllPlannings.subscribe(next => {
        this.showingAllPlannings = next;
      });
  }

  ngOnDestroy() : void {
    this.planningSubscription.unsubscribe();
  }

  onDelete(planning: Planning) {
    this.planningService.deletePlanningFromStaffMember(planning._id)
      .then();
    let i = this.planning.indexOf(planning);
    this.planning.splice(i,1);
  }

  onShowAllPlannings() {
    //Get all plannings
    this.planningService.getPlanningFromFacility();
    this.planningTogglerService.toggleAllPlannings();
  }
}
