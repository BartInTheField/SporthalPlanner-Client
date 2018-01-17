import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StaffMemberService} from '../../../services/staffmember.service';
import {Subscription} from 'rxjs/Subscription';
import {StaffMember} from '../../../models/staffmember.model';

@Component({
  selector: 'app-add-planning',
  templateUrl: './add-planning.component.html',
  styleUrls: ['./add-planning.component.scss']
})
export class AddPlanningComponent implements OnInit, OnDestroy {
  private staffMemberSubscription: Subscription;
  private addPlanningForm: FormGroup;
  private staffMembers: StaffMember[] = [];

  @Input() selectedMember: StaffMember = null;

  constructor(private staffMemberService: StaffMemberService) {}

  ngOnInit(): void {
    this.staffMemberSubscription = this.staffMemberService.staffMemberSubject
      .subscribe((next: StaffMember[]) => {
        this.staffMembers = next;
      });
    this.staffMemberService.getStaffMembers();

    this.addPlanningForm = new FormGroup({
      /*'staffMember': new FormControl('', {
        validators: Validators.required, updateOn: 'change'
      }),*/
      'day': new FormControl('', {
        validators: Validators.required, updateOn: 'change'
      }),
      'startingTime': new FormControl('', {
        validators: Validators.required, updateOn: 'change'
      }),
      'endingTime': new FormControl('', {
        validators: Validators.required, updateOn: 'change'
      }),
    });
  }

  ngOnDestroy(): void {
    this.staffMemberSubscription.unsubscribe();
  }

  onAddPlanning() {
    // this.planningService.addStaffMember(this.addPlanningForm.value)
    //   .then(() => {
    console.log(this.addPlanningForm.value);
      // })
  }



}
