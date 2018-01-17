import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StaffMember} from '../../../models/staffmember.model';
import {StaffMemberService} from '../../../services/staffmember.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit {
  private addmemberForm: FormGroup;
  private staffmember: StaffMember;

  constructor(private staffmemberService: StaffMemberService) {
  }

  ngOnInit() {
    this.addmemberForm = new FormGroup({
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'dateOfBirth': new FormControl('', Validators.required)
    });
  }

  onCancel() {

  }

  onAddStaffMember() {
    this.onAddPromise()
      .then(res => {
        if(res === true) {
          console.log('hij komt hier jehhhh')
        }
      });
  }

  onAddPromise() {
    return new Promise((resolve, reject) => {
      this.staffmember = this.addmemberForm.value;
      this.staffmemberService.addStaffMember(this.staffmember);
      this.addmemberForm = new FormGroup({
        'firstName': new FormControl('', Validators.required),
        'lastName': new FormControl('', Validators.required),
        'dateOfBirth': new FormControl('', Validators.required)
      });
      resolve(true);
    });
  }
}
