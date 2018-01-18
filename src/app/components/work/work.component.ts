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
  showingMemberPlannings: boolean = false;

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

  onMemberPlanningsShowing(showingMemberPlannings: boolean) {
    this.showingMemberPlannings = showingMemberPlannings;
    console.log('Through "bekijk planning"');
    console.log('setting showingMemberPlannings to ' + this.showingMemberPlannings);
  }

  onShowAllPlannings() {
    console.log('Through "Toon alle planningen"');
    this.showingMemberPlannings = false;
    console.log('setting showingMemberPlannings to ' + this.showingMemberPlannings);
  }

}
