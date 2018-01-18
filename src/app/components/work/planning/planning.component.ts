import {Component, OnDestroy, OnInit} from '@angular/core';
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
}
