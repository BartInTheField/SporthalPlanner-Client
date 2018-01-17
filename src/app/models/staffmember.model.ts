import * as moment from "moment";

export class StaffMember {

  constructor(private _id: string,
              private _firstName: string,
              private _lastName: string,
              private _dateOfBirth: Date) {}

  get id(): string {
    return this._id;
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
