import * as moment from "moment";
import _date = moment.unitOfTime._date;

export class StaffMember {

  constructor(private id: string,
              private _firstName: string,
              private _lastName: string,
              private _dateOfBirth: Date) {}

  get _id(): string {
    return this.id;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get dateOfBirth(): Date {
    return this._dateOfBirth;
  }

  set dateOfBirth(value: Date) {
    this._dateOfBirth = value;
  }
}
