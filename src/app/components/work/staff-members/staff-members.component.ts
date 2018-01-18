import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { StaffMember } from '../../../models/staffmember.model';
import {Subscription} from 'rxjs/Subscription';
import {StaffMemberService} from '../../../services/staffmember.service';
import {PlanningService} from '../../../services/planning.service';

@Component({
  selector: 'app-staff-members',
  templateUrl: './staff-members.component.html',
  styleUrls: ['./staff-members.component.scss']
})
export class StaffMembersComponent implements OnInit, OnDestroy {
  private staffMemberSubscription: Subscription;
  private staffMembers = [];

  @Output() onFormChanged = new EventEmitter<boolean>();
  private addingMembers: boolean = false;
  @Output() onPlanningFormChanged = new EventEmitter<boolean>();
  private addingPlanning: boolean = false;
  private addPlanningIsOpen: boolean = false;
  @Output() onMemberSelected = new EventEmitter<StaffMember>();
  @Output() onMemberPlanningsShowing = new EventEmitter<boolean>();
  private showingRelatedPlannings: boolean = false;


  constructor(private staffMemberService: StaffMemberService,
              private planningService: PlanningService) { }

  ngOnInit(): void {
    this.staffMemberSubscription = this.staffMemberService.staffMemberSubject
      .subscribe((next: StaffMember[]) => {
        this.staffMembers = next;
    });
    this.staffMemberService.getStaffMembers();
  }

  ngOnDestroy(): void {
    this.staffMemberSubscription.unsubscribe();
  }

  onDelete(member: StaffMember) {
    this.staffMemberService.deleteStaffMember(member._id)
      .then();
    let i = this.staffMembers.indexOf(member);
    this.staffMembers.splice(i,1);
  }

  onNewMember() {
      this.addingMembers = !this.addingMembers;
      this.onFormChanged.emit(this.addingMembers);
      this.onPlanningFormChanged.emit(false);
      this.addingPlanning = false;
      this.addPlanningIsOpen = false;
  }

  onNewPlanning(member: StaffMember) {
    if (!this.addPlanningIsOpen) {
      this.addingPlanning = !this.addingPlanning;
      this.onPlanningFormChanged.emit(this.addingPlanning);
      this.onFormChanged.emit(false);
      this.addingMembers = false;
      this.addPlanningIsOpen = true;
    }

    this.onMemberSelected.emit(member);
  }

  onViewPlanning(member: StaffMember) {
    this.planningService.getPlanningFromStaffMember(member._id);
    if (this.showingRelatedPlannings === false) {
      this.showingRelatedPlannings = !this.showingRelatedPlannings;
      this.onMemberPlanningsShowing.emit(this.showingRelatedPlannings);
    }
  }
}
