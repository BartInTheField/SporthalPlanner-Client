import { Component, OnInit } from '@angular/core';
import { StaffMember } from '../../../models/staffMember';

@Component({
  selector: 'app-staff-members',
  templateUrl: './staff-members.component.html',
  styleUrls: ['./staff-members.component.scss']
})
export class StaffMembersComponent implements OnInit {
  private staffMembers = [
    new StaffMember(
      1,
      "Rick",
      "Voermans",
      new Date()),
    new StaffMember(
      2,
      "Felix",
      "Boons",
      new Date()
    )
  ];

  constructor() { }

  ngOnInit() {
  }

  onDelete(member: StaffMember) {
    console.log('Deleting ' + member.firstName + ' ' + member.lastName + '...');
    this.staffMemberService.deleteStaffMember();
    let i = this.staffMembers.indexOf(member);
    this.staffMembers.splice(i,1);
  }

}
