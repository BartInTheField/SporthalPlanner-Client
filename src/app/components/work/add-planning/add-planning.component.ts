import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StaffMemberService} from '../../../services/staffmember.service';
import {Subscription} from 'rxjs/Subscription';
import {StaffMember} from '../../../models/staffmember.model';
import {PlanningService} from '../../../services/planning.service';
import {Planning} from '../../../models/planning.model';
import {SportsFacilityService} from '../../../services/sportsfacility.service';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-add-planning',
  templateUrl: './add-planning.component.html',
  styleUrls: ['./add-planning.component.scss']
})
export class AddPlanningComponent implements OnInit, OnDestroy {
  private staffMemberSubscription: Subscription;
  private addPlanningForm: FormGroup;
  private staffMembers: StaffMember[] = [];
  @Output() onClosingForm = new EventEmitter<boolean>();
  private formClosed: boolean = false;
  @Input() selectedMember: StaffMember;

  constructor(private staffMemberService: StaffMemberService,
              private planningService: PlanningService,
              private facilityService: SportsFacilityService,
              private authService: AuthService) {}

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
    // Create new planning
    const planning = new Planning(
      this.authService.getFacilityId(),
      this.addPlanningForm.value.day,
      this.addPlanningForm.value.startingTime,
      this.addPlanningForm.value.endingTime,
      this.authService.getFacilityId(),
      this.selectedMember,
      this.selectedMember._id);

    //Send planning to server
      this.planningService.addPlanningForStaffMember(planning)
      .then((response) => {
        console.log({ success: 'Planning added for staff member' })
      })
      .catch((error) => console.log(error));

      this.addPlanningForm.reset();
  }

  onCancel() {
    this.onClosingForm.emit(!this.formClosed);
  }
}
