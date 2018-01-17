import {Component, OnInit} from '@angular/core';
import {StaffMember} from '../../models/staffmember.model';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  addingMember: boolean = false;
  addingPlanning: boolean = false;
  member: StaffMember;

  constructor() { }

  ngOnInit() {
  }

  onOpenMemberForm(addingMembers: boolean) {
    this.addingMember = addingMembers;
  }

  onOpenPlanningForm(addingPlanning: boolean) {
    this.addingPlanning = addingPlanning;
  }

  onMemberSelected(member: StaffMember) {
    this.member = member;
  }

}
