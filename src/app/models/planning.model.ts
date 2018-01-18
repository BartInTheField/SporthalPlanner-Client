import {SportsFacility} from './sportsFacility.model';
import {StaffMember} from './staffmember.model';

export class Planning {

  constructor(private id: string,
              private _day: Date,
              private _startingTime: string,
              private _endingTime: string,
              private _sportsFacilityId: string,
              private _staffMember: StaffMember,
              private _staffMemberId: string
              ){}

  get _id(): string {
    return this.id;
  }

  get day(): Date {
    return this._day;
  }
  set day(value: Date) {
    this._day = value;
  }

  get startingTime(): string {
    return this._startingTime;
  }
  set startingTime(value: string) {
    this._startingTime = value;
  }

  get endingTime(): string {
    return this._endingTime;
  }
  set endingTime(value: string) {
    this._endingTime = value;
  }

  get sportsFacilityId(): string {
    return this._sportsFacilityId;
  }
  set sportsFacilityId(value: string) {
    this._sportsFacilityId = value;
  }

  get staffMember(): StaffMember {
    return this._staffMember;
  }
  set staffMember(value: StaffMember) {
    this._staffMember = value;
  }

  get staffMemberId(): string {
    return this._staffMemberId;
  }
  set staffMemberId(value: string) {
    this._staffMemberId = value;
  }
}
