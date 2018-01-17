import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import { StaffMember } from '../../../models/staffmember.model';
import {Subscription} from 'rxjs/Subscription';
import {StaffMemberService} from '../../../services/staffmember.service';
import {SportsFacilityService} from '../../../services/sportsfacility.service';
import {AuthService} from '../../../services/auth.service';

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


  constructor(private staffMemberService: StaffMemberService,
              private facilityService: SportsFacilityService,
              private authService: AuthService) { }

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

    // this.planningService.createPlanning(new Planning(
    //   this.authService.getFacilityId(),
    //   member.firstName,
    //   member.lastName,
    //   member.dateOfBirth
    // ));
  }

  onViewPlanning(member: StaffMember) {

  }

}
