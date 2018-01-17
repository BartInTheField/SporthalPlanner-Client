import {Component, OnDestroy, OnInit} from '@angular/core';
import { StaffMember } from '../../../models/staffMember';
import {Subscription} from 'rxjs/Subscription';
import {StaffMemberService} from '../../../services/staffmember.service';

@Component({
  selector: 'app-staff-members',
  templateUrl: './staff-members.component.html',
  styleUrls: ['./staff-members.component.scss']
})
export class StaffMembersComponent implements OnInit, OnDestroy {
  private staffMemberSubscription: Subscription;
  private staffMembers = [];

  constructor(private staffMemberService: StaffMemberService) { }

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
    console.log('Deleting ' + member.firstName + ' ' + member.lastName + '...');
    this.staffMemberService.deleteStaffMember(member.id)
      .then();
    let i = this.staffMembers.indexOf(member);
    this.staffMembers.splice(i,1);
  }

}
