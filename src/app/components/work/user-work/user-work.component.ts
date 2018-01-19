import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Planning } from '../../../models/planning.model';
import { PlanningService } from '../../../services/planning.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-user-work',
  templateUrl: './user-work.component.html',
  styleUrls: ['./user-work.component.scss']
})
export class UserWorkComponent implements OnInit, OnDestroy {

  public userId: string;
  public plannings: Planning[];
  public planningSubscription: Subscription;

  constructor(private route: ActivatedRoute, private planningService: PlanningService) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params.user;
    this.planningService.planningSubject.subscribe((next: Planning[]) => {
      this.plannings = next;
    });
    this.planningService.getPlanningFromStaffMember(this.userId);
  }

  ngOnDestroy() {
    this.planningSubscription.unsubscribe();
  }

}
