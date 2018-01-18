import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {PlanningService} from "../../../services/planning.service";
import {Subscription} from "rxjs/Subscription";
import {Planning} from "../../../models/planning.model";

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit, OnDestroy {
  private planning = [];
  private planningSubscription: Subscription;
  @Input() showingMemberPlannings: boolean;
  @Output() onShowingAllMembers = new EventEmitter<boolean>();

  constructor(private planningService: PlanningService) { }

  ngOnInit(): void {
      this.planningSubscription = this.planningService.planningSubject
        .subscribe((next: Planning[]) => {
          this.planning = next;
        });
      this.planningService.getPlanningFromFacility();
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
    this.onShowingAllMembers.emit(!this.showingMemberPlannings);
  }
}
